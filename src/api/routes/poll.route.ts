import { Router } from "express";
import {
  createPoll,
  deletedPoll,
  updatePoll,
} from "../controllers/poll.controller";
import { catchAsync } from "../../shared/utils/catchAsync";
const pollRoute = Router();

pollRoute.route("/").post(catchAsync(createPoll)).put(catchAsync(updatePoll));
pollRoute.route("/:id").delete(catchAsync(deletedPoll));

export { pollRoute };
