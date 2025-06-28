import { Request, Response } from "express";
import { UserRepository } from "../../db/repositories/UserRepository";
import { successResponse } from "../../shared/utils/serverResponse";
import { hashPassword } from "../../shared/services/hash.service";
import { ApiError } from "../../shared/utils/apiError";

export const register = async (req: Request, res: Response) => {
  const { password, ...otherfield } = req.body;
  const hashedPassword = await hashPassword(password);
  const reqBody = {
    password: hashedPassword,
    ...otherfield,
  };
  console.log(reqBody);
  const repo = UserRepository.getRepository();
  const createUser = await repo.create(reqBody);
  if (!createUser) new ApiError(400, "error occured");
  successResponse(res, createUser, 201);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deletedUserId = req.body.id;
  const repo = UserRepository.getRepository();
  const deletedUser = await repo.delete(deletedUserId);
  if (!deletedUser) throw new Error("error occured");
  res.status(204).json("user deleted");
};
