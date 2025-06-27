import { Router } from "express";
import { getOption } from "../controllers/option.controller";
const optionRoute = Router();

optionRoute.get("/", getOption);

export { optionRoute };
