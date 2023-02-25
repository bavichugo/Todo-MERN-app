"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const auth_1 = __importDefault(require("../controllers/auth"));
const authRouter = (0, express_1.Router)();
// PUT /auth/signup
authRouter.put("/signup", [
    (0, check_1.body)("email")
        .isEmail()
        .withMessage("Please enter a valid email.")
        .normalizeEmail(),
    (0, check_1.body)("password").trim().isLength({ min: 5 }),
    (0, check_1.body)("confirmPassword").trim().isLength({ min: 5 }),
], auth_1.default.signup);
exports.default = authRouter;
