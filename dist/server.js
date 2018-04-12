'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _habitsModel = require('./api/models/habitsModel');

var _habitsModel2 = _interopRequireDefault(_habitsModel);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _habitsRoutes = require('./api/routes/habitsRoutes');

var _habitsRoutes2 = _interopRequireDefault(_habitsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/Habitdb');

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

(0, _habitsRoutes2.default)(app);

app.listen(port);

console.log('Habits RESTful API server started on port: ' + port);