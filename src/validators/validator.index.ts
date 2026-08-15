import type { Request, Response, NextFunction } from "express";
import { setUncaughtExceptionCaptureCallback } from "node:process";
import type { ZodType } from "zod";

const validateRequestBody = (schema: ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("request body is valid");
      next();
    } catch (err) {
      res.status(400).json({
        message: "Invalid request body",
        success: false,
        error: err,
      });
    }
  };
};
export { validateRequestBody };
