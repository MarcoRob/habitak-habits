import express from 'express';
import mongoose from 'mongoose';
import Habit from './api/models/habitsModel';
import bodyParser from 'body-parser';
import routes from './api/routes/habitsRoutes';

var app = express();
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Habitdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port);

console.log('Habits RESTful API server started on port: ' + port);