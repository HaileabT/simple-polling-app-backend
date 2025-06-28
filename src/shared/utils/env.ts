import { configDotenv } from "dotenv";

configDotenv();

const DB_PORT = parseInt(process.env.PORT || "");
const APP_PORT = parseInt(process.env.APP_PORT || "");
console.log(process.env.DB_USERNAME);
export const env = {
  APP_PORT: isNaN(APP_PORT) ? 4000 : APP_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.PASSWORD,
  DB_PORT: isNaN(DB_PORT) ? 5432 : DB_PORT,
  DB_NAME: process.env.DB_NAME,
};
