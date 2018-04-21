import * as request from "supertest";
import * as app from "../../../server";

import * as chai from "chai";
import assertArrays from "chai-arrays";
import assert from "assert";
let expect = chai.expect;

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});