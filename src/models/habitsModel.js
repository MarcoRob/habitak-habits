'use strict'
import mongoose from 'mongoose';
import * as Colors from './colorsModel';
import * as Difficulties from './difficultyModel';
import HabitTypes from './habitTypesModel';
const Schema = mongoose.Schema;

var HabitSchema = new Schema({
    userID: { 
        type: String, 
        required: true 
    },
    type: {
        type: String,
        enum: HabitTypes,
        required: true
    },
    difficulty: { 
        type: String, 
        default: Difficulties.defaultDifficulty,
        enum: Difficulties.difficultyList
    },
    color: { 
        type: String, 
        default: Colors.colorDefault,
        enum: Colors.colorList
    },
    title: { 
        type: String,
        required: true
    },
    score: { 
        type: Number, 
        default: 0 
    }
});

const Habit = mongoose.model('Habits', HabitSchema);
export default Habit;