import { Router } from "express";
import { body } from "express-validator/check";
import User from "../models/user";
import AuthController from "../controllers/auth";

const authRouter = Router();

// PUT /auth/signup
authRouter.put("/signup", [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .normalizeEmail(),
  body("password").trim().isLength({ min: 5 }),
  body("confirmPassword").trim().isLength({ min: 5 }),
],
AuthController.signup
);

export default authRouter;
