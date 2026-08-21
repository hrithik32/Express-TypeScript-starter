import { type NextFunction, type Request, type Response } from "express";
import { type AppError } from "../utils/errors/app.error.js";
export const genericErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    error: err.name,
    success: false,
    message: err.message,
  });
};
