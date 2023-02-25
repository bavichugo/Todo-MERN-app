"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("./models/types");
const auth_1 = __importDefault(require("./routes/auth"));
const PORT = 8080;
const MONGO_URI = "mongodb+srv://bavichugo:bavichugo@cluster0.gnsmdqy.mongodb.net/app";
const app = (0, express_1.default)();
// SETUP
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// ROUTES
app.use("/auth", auth_1.default);
// ERROR HANDLER
const errorHandler = (err, req, res, next) => {
    if (err instanceof types_1.CustomError) {
        const statusCode = err.statusCode;
        const message = err.message;
        const data = err.data;
        res.status(statusCode).json({ message, data });
        return;
    }
    res.status(400).json({ message: "Error" });
};
app.use(errorHandler);
// DATABASE CONNECTION
mongoose_1.default
    .connect(MONGO_URI)
    .then((result) => {
    app.listen(PORT, () => {
        console.log("Connected to database!");
    });
})
    .catch((err) => console.log(err));
