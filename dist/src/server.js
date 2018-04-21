"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _app2.default.listen(_app2.default.get("port"), function () {
    console.log("  App is running at http://localhost:%d", _app2.default.get("port"));
    console.log("  Press CTRL-C to stop\n");
    console.log;
});

exports.default = server;