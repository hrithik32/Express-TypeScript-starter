import type { NextFunction, Request, Response } from "express";
import fs from "fs/promises";
import { notFoundError } from "../utils/errors/app.error.js";
const pingHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await fs.readFile("ping.txt", "utf-8");
    res.status(202).json({
      message: "pong",
      success: true,
    });
  } catch (err) {
    throw new notFoundError("file not found");
  }
};

export default pingHandler;
