import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { CustomError } from "./models/types";
import authRouter from "./routes/auth";

const PORT = 8080;
const MONGO_URI =
  "mongodb+srv://bavichugo:bavichugo@cluster0.gnsmdqy.mongodb.net/app";
const app = express();

// SETUP
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.use("/auth", authRouter);

// ERROR HANDLER
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    const statusCode = err.statusCode;
    const message = err.message;
    const data = err.data;
    res.status(statusCode).json({message, data});
    return;
  }
  res.status(400).json({message: "Error"});
};
app.use(errorHandler);

// DATABASE CONNECTION
mongoose
  .connect(MONGO_URI)
  .then((result) => {
    app.listen(PORT, () => {
      console.log("Connected to database!");
    });
  })
  .catch((err) => console.log(err));
