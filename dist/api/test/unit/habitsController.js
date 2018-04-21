"use strict";

var _supertest = require("supertest");

var request = _interopRequireWildcard(_supertest);

var _server = require("../../../server");

var app = _interopRequireWildcard(_server);

var _chai = require("chai");

var chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var expect = chai.expect;

describe("GET /habits", function () {
    it("Should return a list of json objects that are habits.", function (done) {
        request(app).get("/habits");
    });
});