import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import Habit from "./models/habitsModel";
import bodyParser from "body-parser";
import routes from "./routes/habitsRoutes";

// Load environment variables from .env file.
dotenv.config();

// Create the Express server
const app = express();

// Set Express configuration
app.set("port", process.env.PORT || 3000);

const mongoUrl = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

export default app;