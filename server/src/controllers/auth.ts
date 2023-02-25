import { Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ISignUp, CustomError } from "../models/types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";

const AuthController = {
  async signup (req: ISignUp, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new CustomError('Validation failed', 422, errors.array());
    }

    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    try {
      const existingUser = await User.findOne({email});
      if (existingUser) {
        throw new CustomError("Email already registerest", 400);
      }
      if (password !== confirmPassword) {
        throw new CustomError("Password and confirm password don't match", 400);
      }
      const hashedPw = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        password: hashedPw
      });
      const result = await user.save();
      res.status(201).json({message: 'User created!', userId: result._id});
    } catch (err) {
      if (err instanceof CustomError) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
      }
      next(err);
    }
  },
}

export default AuthController;
