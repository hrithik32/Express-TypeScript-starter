import type { Request, Response } from "express";

const pingHandler = (req: Request, res: Response): void => {
  // console.log("request body: ", req.body);
  // console.log("query params: ", req.query);
  // res.send("pong handler!");
  res.json({
    message: "pong",
    success: true,
  });
};

export default pingHandler;
