'use strict';
import mongoose from 'mongoose';

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
    Habit.findOneAndUpdate({_id: req.params.habitId}, req.body, {new: true}, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let delete_habit = (req, res) => {
    Habit.remove({
        _id: req.params.habitId
    }, (err, habit) => {
        if (err)
            res.send(err);
        res.json({message: "Habit successfully deleted"});
    });
};

export let get_habit = (req, res) => {
    Habit.find({ _id: req.params.habitId}, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let user_list_all_habits = (req, res) => {
    Habit.find({userId: req.params.userId}, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let user_get_habit = (req, res) => {
    Habit.find({ _id: req.params.habitId, userId: req.params.userId }, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let user_update_habit = (req, res) => {
    Habit.findOneAndUpdate({ _id: req.params.habitId, userId: req.params.userId }, req.body, { new: true }, (err, habit) => {
        if (err)
            res.send(err);
        res.json(habit);
    });
};

export let user_delete_habit = (req, res) => {
    Habit.remove({
        _id: req.params.habitId,
        userId: req.params.userId
    }, (err, habit) => {
        if (err)
            res.send(err);
        res.json({ message: "Habit successfully deleted" });
    });
};