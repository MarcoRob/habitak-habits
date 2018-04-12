'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var HabitSchema = new Schema({
    userId: String,
    type: String,
    difficulty: String,
    color: String,
    title: String,
    score: Number
});

const Habit = mongoose.model('Habits', HabitSchema);
export default Habit;