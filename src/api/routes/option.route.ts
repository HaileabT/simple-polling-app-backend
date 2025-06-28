import { Router } from "express";
import {
  createOption,
  deleteOption,
  updateOption,
} from "../controllers/polloption.controller";
import { catchAsync } from "../../shared/utils/catchAsync";
const optionRoute = Router();

optionRoute
  .route("/")
  .post(catchAsync(createOption))
  .put(catchAsync(updateOption));
optionRoute.route("/:id").delete(catchAsync(deleteOption));

export { optionRoute };
