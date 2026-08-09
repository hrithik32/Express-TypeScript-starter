import express from "express";  

const v2Router = express.Router();

v2Router.use("/ping", (req, res) => {
    res.send("pong!");
});

export default v2Router;