import { Request, Response } from "express";
import { VoteRepository } from "../../db/repositories/VoteRepository";
import { successResponse } from "../../shared/utils/serverResponse";

export const createVote = async (req: Request, res: Response) => {
  const reqBody = req.body;
  const repo = VoteRepository.getRepository();
  const createdVote = await repo.create(reqBody);
  if (!createdVote) throw new Error("Error occured");
  successResponse(res, createdVote, 201);
};

export const updateVote = async (req: Request, res: Response) => {
  const reqBody = req.body;
  const repo = VoteRepository.getRepository();
  const updatedVote = await repo.update(reqBody);
  if (!updatedVote) throw new Error("error occured");
  successResponse(res, updatedVote, 200);
};

export const deleteVote = async (req: Request, res: Response) => {
  const deleteVoteId = req.body.id;
  const repo = VoteRepository.getRepository();
  const deletedVote = repo.delete(deleteVoteId);
  if (!deleteVote) throw new Error("cant delete the vote");
  res.status(204).json("voted deleted");
};
