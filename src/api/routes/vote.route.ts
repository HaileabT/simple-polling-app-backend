import { Router } from "express";
import {
  createVote,
  deleteVote,
  updateVote,
} from "../controllers/vote.controller";
import { catchAsync } from "../../shared/utils/catchAsync";
const voteRoute = Router();

voteRoute.route("/").post(catchAsync(createVote)).put(catchAsync(updateVote));
voteRoute.route("/:id").delete(catchAsync(deleteVote));

export { voteRoute };
