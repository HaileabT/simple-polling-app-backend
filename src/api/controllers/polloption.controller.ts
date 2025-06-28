import { Request, Response } from "express";
import { PollOptionRepository } from "../../db/repositories/PollOptionRepository";
import { successResponse } from "../../shared/utils/serverResponse";
import { ApiError } from "../../shared/utils/apiError";

export const createOption = async (req: Request, res: Response) => {
  const reqBody = req.body;
  const repo = PollOptionRepository.getRepository();
  const poll = await repo.create(reqBody);
  if (!poll) new ApiError(400, "error occured");
  successResponse(res, poll, 201);
};

export const updateOption = async (req: Request, res: Response) => {
  const reqBody = req.body;
  const repo = PollOptionRepository.getRepository();
  const poll = await repo.update(reqBody);
  if (!poll) new ApiError(400, "error occured");
  successResponse(res, poll, 200);
};

export const deleteOption = async (req: Request, res: Response) => {
  const PollId = req.body.id;
  const repo = PollOptionRepository.getRepository();
  const deletedOption = await repo.delete(PollId);
  if (!deletedOption) throw new Error("error occured");
  res.status(204).json("pollOption deleted");
};
