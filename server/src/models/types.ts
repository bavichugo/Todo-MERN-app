import { Request } from "express";

// Auth
export interface ISignUp extends Request {
  body: {
    email: string;
    password: string;
    confirmPassword: string;
  };
};

// Error
export class CustomError extends Error {
  statusCode: number;
  data?: any;

  constructor(message: string, statusCode: number, data?: any) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
  }
}