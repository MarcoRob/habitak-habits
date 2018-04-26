"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decreaseScore = exports.increaseScore = undefined;

var _colorsModel = require('../models/colorsModel');

var Colors = _interopRequireWildcard(_colorsModel);

var _difficultyModel = require('../models/difficultyModel');

var Difficulties = _interopRequireWildcard(_difficultyModel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getNewRange(score) {
    var keys = Object.keys(Colors.ColorModel);
    for (var index = 0; index < keys.length; index++) {
        if (score >= Colors.ColorModel[keys[index]].minRange && score < Colors.ColorModel[keys[index]].maxRange) return Colors.ColorModel[keys[index]].value;
    }
}

var increaseScore = exports.increaseScore = function increaseScore(habit, callback) {
    var hDifficulty = habit.difficulty;
    habit.score += Difficulties.DifficultiesModel[hDifficulty].score;
    habit.color = Colors.getNewRange(habit.score);
    if (typeof callback == "function") return callback(null, habit);else return new Error("Passed parameter isn't a callback");
};

var decreaseScore = exports.decreaseScore = function decreaseScore(habit, callback) {
    var hDifficulty = habit.difficulty;
    habit.score -= Difficulties.DifficultiesModel[hDifficulty].score;
    habit.color = getNewRange(habit.score);
    console.log(habit);
    if (typeof callback == "function") return callback(null, habit);else return new Error("Passed parameter isn't a callback");
};