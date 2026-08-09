import express from "express";
import loadConfig from "./config/index.js";

const app = express();

loadConfig();

console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT;

app.get("/ping", (req, res) => {
    res.send("ping pong!");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});