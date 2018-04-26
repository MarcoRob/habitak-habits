'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createObject = exports.updateObject = exports.removeObject = exports.findOneObject = exports.findObject = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Habit = _mongoose2.default.model('Habits');

function changeQueryIdName(originalQuery) {
    if (originalQuery.hasOwnProperty('habitID')) {
        var newQuery = originalQuery;
        newQuery._id = newQuery.habitID;
        delete newQuery.habitID;
        return newQuery;
    } else {
        return originalQuery;
    }
}

var findObject = exports.findObject = function findObject(queryObject, callback) {
    var correctedQuery = changeQueryIdName(queryObject);
    Habit.find(correctedQuery, function (err, habit) {
        if (err) return callback(err);
        if (typeof callback == "function") {
            if (!habit.length) return callback(new Error("No item found"));
            return callback(null, habit);
        } else return new Error("Passed parameter isn't a callback");
    });
};

var findOneObject = exports.findOneObject = function findOneObject(queryObject, callback) {
    var correctedQuery = changeQueryIdName(queryObject);
    Habit.findOne(correctedQuery, function (err, habit) {
        if (err) return callback(err);
        if (typeof callback == "function") {
            if (!habit) return callback(new Error("No item found"));
            return callback(null, habit);
        } else return new Error("Passed parameter isn't a callback");
    });
};

var removeObject = exports.removeObject = function removeObject(queryObject, callback) {
    var correctedQuery = changeQueryIdName(queryObject);
    Habit.remove(correctedQuery, function (err, habit) {
        if (err) return callback(err);
        if (typeof callback == "function") {
            if (habit.n == 0) return callback(new Error("No document deleted"));
            return callback(null, { message: "Habit successfully deleted" });
        } else return new Error("Passed parameter isn't a callback");
    });
};

var updateObject = exports.updateObject = function updateObject(queryObject, updatedValues, callback) {
    var correctedQuery = changeQueryIdName(queryObject);
    Habit.findOneAndUpdate(correctedQuery, updatedValues, { new: true }, function (err, habit) {
        if (err) return callback(err);
        if (typeof callback == "function") {
            if (!habit) return callback(new Error("No item found"));
            return callback(null, habit);
        } else return new Error("Passed parameter isn't a callback");
    });
};

var createObject = exports.createObject = function createObject(newObject, callback) {
    var newHabit = new Habit(newObject);
    newHabit.save(function (err, habit) {
        if (err) return callback(err);
        if (typeof callback == "function") return callback(null, habit);else return new Error("Passed parameter isn't a callback");
    });
};