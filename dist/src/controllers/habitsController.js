"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lower_score = exports.add_score = exports.user_delete_all_habits = exports.user_list_all_habits = exports.get_habit = exports.delete_habit = exports.update_habit = exports.create_habit = exports.list_all_habits = undefined;

var _scoreAlgorithm = require("./scoreAlgorithm");

var ScoreAlgorithm = _interopRequireWildcard(_scoreAlgorithm);

var _databaseController = require("./databaseController");

var DatabaseController = _interopRequireWildcard(_databaseController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var list_all_habits = exports.list_all_habits = function list_all_habits(req, res) {
    DatabaseController.findObject({}, function (error, result) {
        if (error) res.status(400).send(error);
        res.json(result);
    });
};

var create_habit = exports.create_habit = function create_habit(req, res) {
    DatabaseController.createObject(req.body, function (error, result) {
        if (error) res.status(400).send(error);
        res.json(result);
    });
};

var update_habit = exports.update_habit = function update_habit(req, res) {
    DatabaseController.updateObject(req.params, req.body, function (error, result) {
        if (error) res.status(400).send(error);
        res.json(result);
    });
};

var delete_habit = exports.delete_habit = function delete_habit(req, res) {
    DatabaseController.removeObject(req.params, function (error, result) {
        if (error) res.status(400).send(error);
        res.json(result);
    });
};

var get_habit = exports.get_habit = function get_habit(req, res) {
    DatabaseController.findOneObject(req.params, function (error, result) {
        if (error) res.status(400).send(error);
        res.json(result);
    });
};

var user_list_all_habits = exports.user_list_all_habits = function user_list_all_habits(req, res) {
    DatabaseController.findObject(req.params, function (error, result) {
        if (error) res.status(400).send(error);
        res.json(result);
    });
};

var user_delete_all_habits = exports.user_delete_all_habits = function user_delete_all_habits(req, res) {
    DatabaseController.removeObject(req.params, function (error, result) {
        if (error) res.status(400).send(error);
        res.json(result);
    });
};

var add_score = exports.add_score = function add_score(req, res) {
    DatabaseController.findOneObject(req.params, function (error, result) {
        if (error) res.status(400).send(error);
        ScoreAlgorithm.increaseScore(result, function (error, newHabit) {
            if (error) res.status(400).send(error);
            DatabaseController.updateObject({ _id: newHabit._id }, newHabit, function (error, result) {
                if (error) res.status(400).send(error);
                res.json(result);
            });
        });
    });
};

var lower_score = exports.lower_score = function lower_score(req, res) {
    DatabaseController.findOneObject(req.params, function (error, result) {
        if (error) res.status(400).send(error);
        ScoreAlgorithm.decreaseScore(result, function (error, newHabit) {
            if (error) res.status(400).send(error);
            DatabaseController.updateObject({ _id: newHabit._id }, newHabit, function (error, result) {
                if (error) res.status(400).send(error);
                res.json(result);
            });
        });
    });
};