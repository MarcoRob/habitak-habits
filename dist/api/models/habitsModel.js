'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var HabitSchema = new Schema({
    userId: String,
    type: String,
    difficulty: String,
    color: String,
    title: String,
    score: Number
});

var Habit = _mongoose2.default.model('Habits', HabitSchema);
exports.default = Habit;