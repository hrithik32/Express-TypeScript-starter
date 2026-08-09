import dotenv from "dotenv";

function loadEnv() {
    dotenv.config();
    console.log("Environment variables loaded successfully.");
}
loadEnv();

type Config = {
    PORT : number;
}
export const serverConfig: Config = {
    PORT: Number(process.env.PORT) || 3000,
};