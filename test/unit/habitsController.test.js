import request from "supertest";
import app from "../../src/app";

import * as chai from "chai";
import assertArrays from "chai-arrays";
import mongoose from 'mongoose';
var Habit = mongoose.model('Habits');
var expect = chai.expect;
chai.use(assertArrays);

describe("/habits", () => {
    context("GET /habits", () => {
        it("Should return a list of json objects that are habits.", (done) => {
            request(app).get("/habits")
                .end((err, response) => {
                    if(err) throw err;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.be.array();
                    done();
                });
        });
    });

    context("POST /habits", () => {
        it("Should insert a valid Habit object into the database", (done) => {
            let habit = new Habit({ userID: "robert", type: "good", difficulty: "medium", title: "Test habit" });
            request(app).post("/habits")
                .send(habit)
                .end((err,response) => {
                    if(err) throw err;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.be.a("object");
                    expect(response.body).to.have.property("_id");
                    expect(response.body).to.have.property("userID");
                    expect(response.body).to.have.property("type");
                    expect(response.body).to.have.property("difficulty");
                    expect(response.body).to.have.property("title");
                    expect(response.body).to.have.property("score");
                    expect(response.body).to.have.property("color");
                    done();
                });
        });

        it("Should return an error for invalid Habit object", (done) => {
            let habit = new Habit({ userID: "mario", type: "amazing", difficulty: "medium", title: "Here's a wrong one"});
            request(app).post("/habits")
                .send(habit)
                .expect(400, done);
        });

        it("Should return an error for incomplete Habit object", (done) => {
            let habit = new Habit({ userID: "mario", type: "good", difficulty: "medium"});
                request(app).post("/habits")
                    .send(habit)
                    .expect(400, done);
        });
    });
});

describe("/habits/:habitID", () => {
    context("GET /habits/:habitID", () => {
        it("Should return a JSON Habit object", (done) => {
            let habit = new Habit({ userID: "mario", type: "good", difficulty: "medium", title: "Test habit"});
            habit.save((err, habit) => {
                request(app).get("/habits/" + habit._id)
                    .send(habit)
                    .end((err, response) => {
                        if(err) throw err;
                        expect(response.statusCode).to.equal(200);
                        expect(response.body).to.be.a("object");
                        expect(response.body).to.have.property("_id");
                        expect(response.body).to.have.property("userID");
                        expect(response.body).to.have.property("type");
                        expect(response.body).to.have.property("difficulty");
                        expect(response.body).to.have.property("title");
                        expect(response.body).to.have.property("score");
                        expect(response.body).to.have.property("color");
                        done();
                    });
            });
        });

        it("Should return an error for not found object", (done) => {
            request(app).get("/habits/" + "abcdefg12345")
                .expect(400, done);
        });
    });

    context("PUT /habits/:habitID", () => {
        it("Should return a JSON Habit object and success code", (done) => {
            let habit = new Habit({ userID: "mario", type: "good", difficulty: "medium", title: "Test habit" });
            let updateH = { type: "mixed", difficulty: "easy" };
            habit.save((err, response) => {
                request(app).put("/habits/" + habit._id)
                    .send(updateH)
                    .end((err, response) => {
                        if(err) throw err;
                        expect(response.statusCode).to.equal(200);
                        expect(response.body).to.be.a("object");
                        expect(response.body).to.have.property("type").eql("mixed");
                        expect(response.body).to.have.property("difficulty").eql("easy");
                        done();
                    });
            });
        });

        it("Should return an error for not found object", (done) => {
            request(app).put("/habits/" + "abcdefg12345")
                .expect(400, done);
        });
    });

    context("DELETE /habits/:habitID", () => {
        it("Should return a success message", (done) => {
            let habit = new Habit({ userID: "mario", type: "good", difficulty: "medium", title: "Test habit" });
            habit.save((err, response) => {
                request(app).delete("/habits/" + habit._id)
                    .send(habit)
                    .end((err, response) => {
                        if(err) throw err;
                        expect(response.statusCode).to.equal(200);
                        expect(response.body).to.have.property("message").eql("Habit successfully deleted");
                        done();
                    });
            });
        });

        it("Should return an error for not found object", (done) => {
            request(app).delete("/habits/" + "abcdefg12345")
                .expect(400, done);
        });
    });
});

describe("/users/:userID/habits", () => {
    var globalHabitId;
    context("GET /users/:userID/habits", () => {
        it("Should return a JSON Habit object array and success code", (done) => {
            let habit = new Habit({ userID: "derpy", type: "good", difficulty: "medium", title: "Test habit" });
            globalHabitId = habit._id;
            habit.save((err, response) => {
                request(app).get("/users/" + habit.userID + "/habits")
                    .send(habit)
                    .end((err, response) => {
                        if(err) throw err;
                        expect(response.statusCode).to.equal(200);
                        expect(response.body).to.be.array();
                        expect(response.body).to.be.ofSize(1);
                        done();
                    });
            });
        });

        after((done) => {
            request(app).delete("/habits/" + globalHabitId)
                .expect(200, done);
        })

        it("Should return an error for not found object", (done) => {
            request(app).get("/users/notrealuser/habits")
                .expect(400, done);
        });
    });

    context("DELETE /users/:userID/habits", () => {
        it("Should return a success message", (done) => {
            let habit = new Habit({ userID: "mario", type: "good", difficulty: "medium", title: "Test habit" });
            habit.save((err, response) => {
                request(app).delete("/users/" + habit.userID + "/habits")
                    .send(habit)
                    .end((err, response) => {
                        if (err) throw err;
                        expect(response.statusCode).to.equal(200);
                        expect(response.body).to.have.property("message").eql("Habit successfully deleted");
                        done();
                    });
            });
        });

        it("Should return an error for not found object", (done) => {
            request(app).delete("/users/notrealuser/habits")
                .expect(400, done);
        });
    });
});