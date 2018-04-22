'use strict';
import * as habits from '../controllers/habitsController';

export default function (app) {

    // habits Routes
    app.route('/habits')
        .get(habits.list_all_habits)
        .post(habits.create_habit);

    app.route('/habits/:habitID')
        .get(habits.get_habit)
        .put(habits.update_habit)
        .delete(habits.delete_habit);

    app.route('/users/:userID/habits')
        .get(habits.user_list_all_habits)
        .delete(habits.user_delete_all_habits);

    app.route('/habits/addscore')
        .post(habits.add_score);

    app.route('/habits/lowerscore')
        .post(habits.lower_score);
}