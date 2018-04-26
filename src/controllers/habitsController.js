'use strict';
import mongoose from 'mongoose';
import * as ScoreAlgorithm from './scoreAlgorithm';

var Habit = mongoose.model('Habits');

export let list_all_habits = (req, res) => {
    Habit.find({}, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let create_habit = (req, res) => {
    var newHabit = new Habit(req.body);
    newHabit.save((err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let update_habit = (req, res) => {
    Habit.findOneAndUpdate({_id: req.params.habitID}, req.body, {new: true}, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let delete_habit = (req, res) => {
    Habit.remove({
        _id: req.params.habitID
    }, (err, habit) => {
        if (err)
            res.send(err);
        res.json({message: "Habit successfully deleted"});
    });
};

export let get_habit = (req, res) => {
    Habit.find({ _id: req.params.habitID}, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let user_list_all_habits = (req, res) => {
    Habit.find({userID: req.params.userID}, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let user_delete_all_habits = (req, res) => {
    Habit.remove({ userID: req.params.userID }, (err, habit) => {
        if (err)
            res.send(err);
        res.json({ message: "Habits successfully deleted" });
    });
};

export let add_score = (req, res) => {
    Habit.find({ _id: req.params.habitID }, (err, habit) => {
        if (err)
            res.send(err);
        ScoreAlgorithm.increaseScore(habit);
    });
};

export let lower_score = (req, res) => {
    Habit.find({ _id: req.params.habitID }, (err, habit) => {
        if (err)
            res.send(err);
        ScoreAlgorithm.decreaseScore(habit);
    });
};