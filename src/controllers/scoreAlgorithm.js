import * as Colors from './colorsModel';
import * as Difficulties from './difficultyModel';

export const increaseScore = (habit) => {
    habit.score += Difficulties[habit.difficulty].score;
    return habit;
}

export const decreaseScore = (habit) => {
    habit.score -= Difficulties[habit.difficulty].score;
    return habit;
}