import express, { json } from "express";

const api = express();

api.use(json());

api.use("/", (req, res) => {
  res.send("Hello from API");
});

export { api };
