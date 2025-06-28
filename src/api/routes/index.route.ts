import { Router } from "express";
import { pollRoute } from "./poll.route";
import { optionRoute } from "./option.route";
import userRoute from "./user.route";
import { voteRoute } from "./vote.route";

const indexRoute = Router();
indexRoute.use("/user", userRoute);
indexRoute.use("/poll", pollRoute);
indexRoute.use("/option", optionRoute);
indexRoute.use("/vote", voteRoute);

export { indexRoute };
