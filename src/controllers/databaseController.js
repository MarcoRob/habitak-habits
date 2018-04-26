'use strict';
import mongoose from 'mongoose';
var Habit = mongoose.model('Habits');

function changeQueryIdName(originalQuery) {
    if (originalQuery.hasOwnProperty('habitID')) {
        let newQuery = originalQuery;
        newQuery._id = newQuery.habitID;
        delete newQuery.habitID;
        return newQuery;
    } else {
        return originalQuery;
    }
}

export let findObject = (queryObject, callback) => {
    let correctedQuery = changeQueryIdName(queryObject);
    Habit.find(correctedQuery, (err, habit) => {
        if (err)
            return callback(err);
        if (typeof callback == "function") {
            if (!habit.length)
                return callback(new Error("No item found"));
            return callback(null, habit);
        }
        else
            return new Error("Passed parameter isn't a callback");
    });
}

export let findOneObject = (queryObject, callback) => {
    let correctedQuery = changeQueryIdName(queryObject);
    Habit.findOne(correctedQuery, (err, habit) => {
        if (err)
            return callback(err);
        if (typeof callback == "function") {
            if (!habit)
                return callback(new Error("No item found"));
            return callback(null, habit);
        }
        else
            return new Error("Passed parameter isn't a callback");
    });
}

export let removeObject = (queryObject, callback) => {
    let correctedQuery = changeQueryIdName(queryObject);
    Habit.remove(correctedQuery, (err, habit) => {
        if (err)
            return callback(err);
        if (typeof callback == "function") {
            if(habit.n == 0)
                return callback(new Error("No document deleted"))
            return callback(null, { message: "Habit successfully deleted" });
        }
        else
            return new Error("Passed parameter isn't a callback");
    });
}

export let updateObject = (queryObject, updatedValues, callback) => {
    let correctedQuery = changeQueryIdName(queryObject);
    Habit.findOneAndUpdate(correctedQuery, updatedValues, { new: true }, (err, habit) => {
        if (err)
            return callback(err);
        if (typeof callback == "function") {
            if (!habit)
                return callback(new Error("No item found"));
            return callback(null, habit);
        }
        else
            return new Error("Passed parameter isn't a callback");
    });
}

export let createObject = (newObject, callback) => {
    var newHabit = new Habit(newObject);
    newHabit.save((err, habit) => {
        if (err)
            return callback(err);
        if (typeof callback == "function")
            return callback(null, habit);
        else
            return new Error("Passed parameter isn't a callback");
    });
}