import express from "express";
import pingHandler from "../../controllers/pingController.js";

const pingRouter = express.Router();

pingRouter.get("/", pingHandler);
pingRouter.get("/health",(req, res) => {
    res.status(202).send("Server is healthy!");
});

export default pingRouter;