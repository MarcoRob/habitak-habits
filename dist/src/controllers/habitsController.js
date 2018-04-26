'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lower_score = exports.add_score = exports.user_delete_all_habits = exports.user_list_all_habits = exports.get_habit = exports.delete_habit = exports.update_habit = exports.create_habit = exports.list_all_habits = undefined;

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
    Habit.findOneAndUpdate({ _id: req.params.habitID }, req.body, { new: true }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var delete_habit = exports.delete_habit = function delete_habit(req, res) {
    Habit.remove({
        _id: req.params.habitID
    }, function (err, habit) {
        if (err) res.send(err);
        res.json({ message: "Habit successfully deleted" });
    });
};

var get_habit = exports.get_habit = function get_habit(req, res) {
    Habit.find({ _id: req.params.habitID }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var user_list_all_habits = exports.user_list_all_habits = function user_list_all_habits(req, res) {
    Habit.find({ userID: req.params.userID }, function (err, habit) {
        if (err) res.send(err);
        res.json(habit);
    });
};

var user_delete_all_habits = exports.user_delete_all_habits = function user_delete_all_habits(req, res) {
    Habit.remove({ userID: req.params.userID }, function (err, habit) {
        if (err) res.send(err);
        res.json({ message: "Habits successfully deleted" });
    });
};

var add_score = exports.add_score = function add_score(req, res) {
    //Run Algorithm in increase mode
};

var lower_score = exports.lower_score = function lower_score(req, res) {
    //Run Algorithm in decrease mode
};