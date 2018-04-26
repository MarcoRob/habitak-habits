"use strict";
import * as ScoreAlgorithm from "./scoreAlgorithm";
import * as DatabaseController from "./databaseController";
import * as Colors from '../models/colorsModel';

export let list_all_habits = (req, res) => {
    DatabaseController.findObject({}, (error, result) => {
        if(error)
            res.send(error);
        res.json(result);
    })
};

export let create_habit = (req, res) => {
    DatabaseController.createObject(req.body, (error, result) => {
        if(error)
            res.send(error);
        res.json(result);
    })
};

export let update_habit = (req, res) => {
    DatabaseController.updateObject(req.params, req.body, (error, result) => {
        if(error)
            res.send(error);
        res.json(result);
    });
};

export let delete_habit = (req, res) => {
    DatabaseController.removeObject(req.params, (error, result) => {
        if (error)
            res.send(error);
        res.json(result);
    });
};

export let get_habit = (req, res) => {
    DatabaseController.findObject(req.params, (error, result) => {
        if (error)
            res.send(error);
        res.json(result);
    });
};

export let user_list_all_habits = (req, res) => {
    DatabaseController.findObject(req.params, (error, result) => {
        if (error)
            res.send(error);
        res.json(result);
    });
};

export let user_delete_all_habits = (req, res) => {
    DatabaseController.removeObject(req.params, (error, result) => {
        if (error)
            res.send(error);
        res.json(result);
    });
};

export let add_score = (req, res) => {
    DatabaseController.findObject(req.params, (error, result) => {
        if (error)
            res.send(error);
        var updatedHabit = ScoreAlgorithm.increaseScore(habit);
        var newColor = Colors.getNewRange(updatedHabit.score);
        updatedHabit.color = newColor.name;
    });
};

export let lower_score = (req, res) => {
    DatabaseController.findObject(req.params, (error, result) => {
        if (error)
            res.send(error);
        var updatedHabit = ScoreAlgorithm.decreaseScore(habit);
        var newColor = Colors.getNewRange(updatedHabit.score);
        updatedHabit.color = newColor.name;
        DatabaseController.updateObject( {_id: updatedHabit._id}, updatedHabit, (error, result) => {
            if (error)
                res.send(error);
            res.json(result);
        })
    });
};