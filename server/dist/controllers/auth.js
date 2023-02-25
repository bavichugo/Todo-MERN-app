"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const types_1 = require("../models/types");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const AuthController = {
    signup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                throw new types_1.CustomError('Validation failed', 422, errors.array());
            }
            const email = req.body.email;
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;
            try {
                const existingUser = yield user_1.default.findOne({ email });
                if (existingUser) {
                    throw new types_1.CustomError("Email already registerest", 400);
                }
                if (password !== confirmPassword) {
                    throw new types_1.CustomError("Password and confirm password don't match", 400);
                }
                const hashedPw = yield bcryptjs_1.default.hash(password, 12);
                const user = new user_1.default({
                    email,
                    password: hashedPw
                });
                const result = yield user.save();
                res.status(201).json({ message: 'User created!', userId: result._id });
            }
            catch (err) {
                if (err instanceof types_1.CustomError) {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                }
                next(err);
            }
        });
    },
};
exports.default = AuthController;
