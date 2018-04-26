"use strict";
import * as ScoreAlgorithm from "./scoreAlgorithm";
import * as DatabaseController from "./databaseController";

export let list_all_habits = (req, res) => {
    DatabaseController.findObject({}, (error, result) => {
        if(error)
            res.status(400).send(error);
        res.json(result);
    })
};

export let create_habit = (req, res) => {
    DatabaseController.createObject(req.body, (error, result) => {
        if(error)
            res.status(400).send(error);
        res.json(result);
    })
};

export let update_habit = (req, res) => {
    DatabaseController.updateObject(req.params, req.body, (error, result) => {
        if(error)
            res.status(400).send(error);
        res.json(result);
    });
};

export let delete_habit = (req, res) => {
    DatabaseController.removeObject(req.params, (error, result) => {
        if (error)
            res.status(400).send(error);
        res.json(result);
    });
};

export let get_habit = (req, res) => {
    DatabaseController.findOneObject(req.params, (error, result) => {
        if (error)
            res.status(400).send(error);
        res.json(result);
    });
};

export let user_list_all_habits = (req, res) => {
    DatabaseController.findObject(req.params, (error, result) => {
        if (error)
            res.status(400).send(error);
        res.json(result);
    });
};

export let user_delete_all_habits = (req, res) => {
    DatabaseController.removeObject(req.params, (error, result) => {
        if (error)
            res.status(400).send(error);
        res.json(result);
    });
};

export let add_score = (req, res) => {
    DatabaseController.findOneObject(req.params, (error, result) => {
        if (error)
            res.status(400).send(error);
        ScoreAlgorithm.increaseScore(result, (error, newHabit) => {
            if (error)
                res.status(400).send(error);
            DatabaseController.updateObject({ _id: newHabit._id }, newHabit, (error, result) => {
                if (error)
                    res.status(400).send(error);
                res.json(result);
            })
        });
    });
};

export let lower_score = (req, res) => {
    DatabaseController.findOneObject(req.params, (error, result) => {
        if (error)
            res.status(400).send(error);
        ScoreAlgorithm.decreaseScore(result, (error, newHabit) => {
            if (error)
                res.status(400).send(error);
            DatabaseController.updateObject({ _id: newHabit._id }, newHabit, (error, result) => {
                if (error)
                    res.status(400).send(error);
                res.json(result);
            })
        });
    });
};