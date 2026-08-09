import express from "express";
import { serverConfig } from "./config/index.js";
import v1Router from "./routers/v1/index.route.js";
import v2Router from "./routers/v2/index.route.js";

const app = express();

const PORT = serverConfig.PORT;

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});