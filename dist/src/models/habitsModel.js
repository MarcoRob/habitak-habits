'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _colorsModel = require('./colorsModel');

var Colors = _interopRequireWildcard(_colorsModel);

var _difficultyModel = require('./difficultyModel');

var Difficulties = _interopRequireWildcard(_difficultyModel);

var _habitTypesModel = require('./habitTypesModel');

var _habitTypesModel2 = _interopRequireDefault(_habitTypesModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var HabitSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: _habitTypesModel2.default,
        required: true
    },
    difficulty: {
        type: String,
        default: Difficulties.defaultDifficulty,
        enum: Difficulties.difficultyList
    },
    color: {
        type: String,
        default: Colors.colorDefault,
        enum: Colors.colorList
    },
    title: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }
});

var Habit = _mongoose2.default.model('Habits', HabitSchema);
exports.default = Habit;