import express, { json } from "express";
import { indexRoute } from "./routes/index.route";

const api = express();

api.use(json());

api.use("/api", indexRoute);

export { api };
