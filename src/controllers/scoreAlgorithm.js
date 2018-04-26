"use strict"
import * as Colors from '../models/colorsModel';
import * as Difficulties from '../models/difficultyModel';

function getNewRange(score) {
    let keys = Object.keys(Colors.ColorModel)
    for(var index = 0; index < keys.length; index++) {
        if (score >= Colors.ColorModel[keys[index]].minRange && score < Colors.ColorModel[keys[index]].maxRange)
            return Colors.ColorModel[keys[index]].value;
    }
}

export let increaseScore = (habit, callback) => {
    let hDifficulty = habit.difficulty;
    habit.score += Difficulties.DifficultiesModel[hDifficulty].score;
    habit.color = getNewRange(habit.score);
    if (typeof callback == "function")
        return callback(null, habit);
    else
        return new Error("Passed parameter isn't a callback");
}

export let decreaseScore = (habit, callback) => {
    let hDifficulty = habit.difficulty;
    habit.score -= Difficulties.DifficultiesModel[hDifficulty].score;
    habit.color = getNewRange(habit.score);
    if (typeof callback == "function")
        return callback(null, habit);
    else
        return new Error("Passed parameter isn't a callback");
}