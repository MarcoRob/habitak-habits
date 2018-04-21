'use strict'
import mongoose from 'mongoose';
import * as colors from './colorsModel';
import Difficulties from './difficultyModel'
const Schema = mongoose.Schema;

var HabitSchema = new Schema({
    userID: String,
    type: String,
    difficulty: { type: String, default: Difficulties.medium.name },
    color: { type: String, default: colors.getOrange },
    title: String,
    score: { type: Number, default: 0 }
});

const Habit = mongoose.model('Habits', HabitSchema);
export default Habit;