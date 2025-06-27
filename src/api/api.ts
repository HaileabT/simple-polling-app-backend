import express from "express";
import { indexRoute } from "./routes/index.route";
const app = express();
export { app };

app.use("/api", indexRoute);
