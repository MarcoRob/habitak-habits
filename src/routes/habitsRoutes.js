'use strict';
import * as habits from '../controllers/habitsController';

export default function (app) {

    // habits Routes
    app.route('/habits')
        .get(habits.list_all_habits)
        .post(habits.create_habit);

    app.route('/habits/:habitId')
        .get(habits.get_habit)
        .put(habits.update_habit)
        .delete(habits.delete_habit);

    app.route('/users/:userId/habits')
        .get(habits.user_list_all_habits)

    app.route('/users/:userId/habits/:habitId')
        .get(habits.user_get_habit)
        .put(habits.user_update_habit)
        .delete(habits.user_delete_habit);
}