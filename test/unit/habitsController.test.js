import request from "supertest";
import app from "../../src/app";

import * as chai from "chai";
import assertArrays from "chai-arrays";
let expect = chai.expect;
chai.use(assertArrays);

describe("GET /habits", () => {
    it("Should return a list of json objects that are habits.", (done) => {
        request(app).get("/habits")
            .end(function (err, response) {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.be.array();
                done();
            });
    });
});