import express from "express";
import pingHandler from "../../controllers/pingController.js";
import { validateRequestBody } from "../../validators/validator.index.js";
import { pingSchema } from "../../validators/ping.validator.js";
const pingRouter = express.Router();

pingRouter.get("/",validateRequestBody(pingSchema), pingHandler);
pingRouter.get("/health", (req, res) => {
  res.status(202).send("Server is healthy!");
});

export default pingRouter;
