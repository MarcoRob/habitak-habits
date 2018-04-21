'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.user_delete_habit = exports.user_update_habit = exports.user_get_habit = exports.user_list_all_habits = exports.get_habit = exports.delete_habit = exports.update_habit = exports.create_habit = exports.list_all_habits = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Habit = _mongoose2.default.model('Habits');

var list_all_habits = exports.list_all_habits = function list_all_habits(req, res) {
    Habit.find({}, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var create_habit = exports.create_habit = function create_habit(req, res) {
    var newHabit = new Habit(req.body);
    newHabit.save(function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var update_habit = exports.update_habit = function update_habit(req, res) {
    Habit.findOneAndUpdate({ _id: req.params.habitId }, req.body, { new: true }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var delete_habit = exports.delete_habit = function delete_habit(req, res) {
    Habit.remove({
        _id: req.params.habitId
    }, function (err, habit) {
        if (err) res.send(err);
        res.json({ message: "Habit successfully deleted" });
    });
};

var get_habit = exports.get_habit = function get_habit(req, res) {
    Habit.find({ _id: req.params.habitId }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var user_list_all_habits = exports.user_list_all_habits = function user_list_all_habits(req, res) {
    Habit.find({ userId: req.params.userId }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var user_get_habit = exports.user_get_habit = function user_get_habit(req, res) {
    Habit.find({ _id: req.params.habitId, userId: req.params.userId }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var user_update_habit = exports.user_update_habit = function user_update_habit(req, res) {
    Habit.findOneAndUpdate({ _id: req.params.habitId, userId: req.params.userId }, req.body, { new: true }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var user_delete_habit = exports.user_delete_habit = function user_delete_habit(req, res) {
    Habit.remove({
        _id: req.params.habitId,
        userId: req.params.userId
    }, function (err, habit) {
        if (err) res.send(err);
        res.json({ message: "Habit successfully deleted" });
    });
};