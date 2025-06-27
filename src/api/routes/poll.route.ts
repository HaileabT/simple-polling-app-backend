import { Router } from "express";
import { getPoll } from "../controllers/poll.controller";
const pollRoute = Router();

pollRoute.get("/", getPoll);

export { pollRoute };
