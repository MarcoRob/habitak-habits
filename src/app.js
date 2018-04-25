import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import Habit from "./models/habitsModel";
import bodyParser from "body-parser";
import routes from "./routes/habitsRoutes";
import cors from "cors";

// Load environment variables from .env file.
dotenv.config();

// Create the Express server
const app = express();

// Set Express configuration
app.set("port", process.env.PORT || 3000);

const mongoUrl = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

const options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE",
    origin: "*",
    preflightContinue: false
};

// use cors middleware
app.use(cors(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

export default app;