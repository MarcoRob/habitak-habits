'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {

    // habits Routes
    app.route('/habits').get(habits.list_all_habits).post(habits.create_habit);

    app.route('/habits/:habitID').get(habits.get_habit).put(habits.update_habit).delete(habits.delete_habit);

    app.route('/users/:userID/habits').get(habits.user_list_all_habits).delete(habits.user_delete_all_habits);

    app.route('/habits/:habitID/addscore').get(habits.add_score);

    app.route('/habits/:habitID/lowerscore').get(habits.lower_score);
};

var _habitsController = require('../controllers/habitsController');

var habits = _interopRequireWildcard(_habitsController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }