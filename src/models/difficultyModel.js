"use strict"
export const DifficultiesModel = {
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
}

let diffList = []

for(var difficulty in DifficultiesModel) {
    diffList.push(difficulty.name);
}

export const difficultyList = diffList;

export const defaultDifficulty = "medium";