import { Request, Response } from "express";
import { PollRepository } from "../../db/repositories/PollRepository";
import { successResponse } from "../../shared/utils/serverResponse";
import { ApiError } from "../../shared/utils/apiError";

export const createPoll = async (req: Request, res: Response) => {
  const reqBody = req.body;
  const repo = PollRepository.getRepository();
  const createdPoll = await repo.create(reqBody);
  if (!createdPoll) new ApiError(400, "can't create the poll");
  successResponse(res, createdPoll, 201);
};

export const updatePoll = (req: Request, res: Response) => {
  const reqBody = req.body;
  const repo = PollRepository.getRepository();
  const updatedPOll = repo.update(reqBody);
  if (!updatedPOll) new ApiError(400, "can't update the poll");
  successResponse(res, updatedPOll, 200);
};

export const deletedPoll = async (req: Request, res: Response) => {
  const deletedPollId = req.body.id;
  console.log(deletedPollId);
  const repo = PollRepository.getRepository();
  const deletedPoll = await repo.delete(deletedPollId);
  console.log("delete value", deletedPoll);
  if (!deletedPoll) new ApiError(400, "can't delete the poll");
  res.status(204).json("user deleted");
};
