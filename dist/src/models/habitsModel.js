'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _colorsModel = require('./colorsModel');

var colors = _interopRequireWildcard(_colorsModel);

var _difficultyModel = require('./difficultyModel');

var _difficultyModel2 = _interopRequireDefault(_difficultyModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var HabitSchema = new Schema({
    userID: String,
    type: String,
    difficulty: { type: String, default: _difficultyModel2.default.medium.name },
    color: { type: String, default: colors.getOrange },
    title: String,
    score: { type: Number, default: 0 }
});

var Habit = _mongoose2.default.model('Habits', HabitSchema);
exports.default = Habit;