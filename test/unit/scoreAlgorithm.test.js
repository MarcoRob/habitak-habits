import request from "supertest";
import app from "../../src/app";

import * as chai from "chai";
import mongoose from 'mongoose';
var Habit = mongoose.model('Habits');
var expect = chai.expect;

describe("Score Algorithm tests", () => {
    context("GET /habits/:habitID/addscore", () => {
        it("Should return an updated habit JSON object", (done) => {
            let habit = new Habit({ userID: "raul", type: "bad", difficulty: "hard", title: "Test habit3" });
            habit.save((err, response) => {
                request(app).get("/habits/" + habit._id + "/addscore")
                    .send(habit)
                    .end((err, response) => {
                        if(err) throw err;
                        expect(response.statusCode).to.equal(200);
                        expect(response.body).to.be.a("object");
                        expect(response.body).to.have.property("score").eql(5);
                        expect(response.body).to.have.property("color").eql("orange");
                        done();
                    })
            });
        });
    });

    context("GET /habits/:habitID/lowerscore", () => {
        it("Should return an updated habit JSON object", (done) => {
            let habit = new Habit({ userID: "jirge", type: "mixed", difficulty: "easy", title: "Test habit2" });
            habit.save((err, response) => {
                request(app).get("/habits/" + habit._id + "/lowerscore")
                    .send(habit)
                    .end((err, response) => {
                        if (err) throw err;
                        expect(response.statusCode).to.equal(200);
                        expect(response.body).to.be.a("object");
                        expect(response.body).to.have.property("score").eql(-2);
                        expect(response.body).to.have.property("color").eql("red");
                        done();
                    })
            });
        });
    });
});