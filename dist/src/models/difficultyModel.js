"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DifficultiesModel = exports.DifficultiesModel = {
    easy: {
        name: "easy",
        score: 2
    },
    medium: {
        name: "medium",
        score: 3
    },
    hard: {
        name: "hard",
        score: 5
    }
};

var diffList = [];

for (var difficulty in DifficultiesModel) {
    diffList.push(difficulty.name);
}

var difficultyList = exports.difficultyList = diffList;

var defaultDifficulty = exports.defaultDifficulty = "medium";