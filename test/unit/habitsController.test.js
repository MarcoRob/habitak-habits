import request from "supertest";
import app from "../../src/app";

import * as chai from "chai";
import assertArrays from "chai-arrays";
let expect = chai.expect;
chai.use(assertArrays);

describe("/habits", () => {
    context("GET /habits", () => {
        it("Should return a list of json objects that are habits.", (done) => {
            request(app).get("/habits")
                .end(function (err, response) {
                    if(err) throw err;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.be.array();
                    done();
                });
        });
    });

    context("POST /habits", () => {
        it("Should insert a valid Habit object into the database", (done) => {
            request(app).post("/habits")
                .field("userID", "rodremur@gmail.com")
                .field("type", "good")
                .field("title", "Testing the habit creation")
                .expect(200, done);
        });

        it("Should return an error for invalid Habit object", (done) => {
            request(app).post("/habits")
                .field("userID", "rodremur@gmail.com")
                .field("type", "amazing")
                .field("title", "Invalid fields")
                .field("type", "strong")
                .expect(400, done);
        });

        it("Should return an error for incomplete Habit object", (done) => {
                request(app).post("/habits")
                .field("userID", "rodremur@gmail.com")
                .field("title", "Incomplete Habit")
                .expect(400, done);
        });
    });
});

describe("/habits/:habitID", () => {
    context("GET /habits/:habitID", () => {
        it("Should return a JSON Habit object", (done) => {
            request(app).get("/habits/")
            .set("habitID", "mongoIDgoeshere")
        });

        it("Should return an error for not found object", (done) => {

        });
    });

    context("PUT /habits/:habitID", () => {
        it("Should return a JSON Habit object and success code", (done) => {

        });

        it("Should return an error for not found object", (done) => {

        });
    });

    context("DELETE /habits/:habitID", () => {
        it("Should return a success message", (done) => {

        });

        it("Should return an error for not found object", (done) => {

        });
    });
});

describe("/users/:userID/habits", () => {
    context("GET /users/:userID/habits", () => {
        it("Should return a JSON Habit object and success code", (done) => {

        });

        it("Should return an error for not found object", (done) => {

        });
    });

    context("DELETE /users/:userID/habits", () => {
        it("Should return a success message", (done) => {

        });

        it("Should return an error for not found object", (done) => {

        });
    });
});

describe("Score Algorithm", () => {
    context("POST /habits/:habitID/addscore", () => {
        it("Should return a JSON Habit object and success code", (done) => {

        });

        it("Should return an error for not found object", (done) => {

        });
    });

    context("POST /habits/:habitID/lowerscore", () => {
        it("Should return a JSON Habit object and success code", (done) => {

        });

        it("Should return an error for not found object", (done) => {

        });
    });
});