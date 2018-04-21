"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _dotenv = require("dotenv");

var dotenv = _interopRequireWildcard(_dotenv);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _habitsModel = require("./models/habitsModel");

var _habitsModel2 = _interopRequireDefault(_habitsModel);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _habitsRoutes = require("./routes/habitsRoutes");

var _habitsRoutes2 = _interopRequireDefault(_habitsRoutes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load environment variables from .env file.
dotenv.config();

// Create the Express server
var app = (0, _express2.default)();

// Set Express configuration
app.set("port", process.env.PORT || 3000);

var mongoUrl = process.env.MONGODB_URI;
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(mongoUrl);

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

(0, _habitsRoutes2.default)(app);

exports.default = app;