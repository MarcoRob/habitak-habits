import * as request from "supertest";
import * as app from "../../../server";

import * as chai from "chai";
import assertArrays from "chai-arrays";
let expect = chai.expect;
chai.use(assertArrays);

describe("GET /habits", () => {
    it("Should return a list of json objects that are habits.", function(done) {
        request(app).get("/habits")
            .end(function (err, response) {
                expect(response.statusCode).to.equal(200);
                expect(response.body.to.be.array());
                done();
            })
    })
})