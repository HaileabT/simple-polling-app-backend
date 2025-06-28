import { Request, Response } from "express";
import { UserRepository } from "../../db/repositories/UserRepository";
import { ApiError } from "../../shared/utils/apiError";
import { createToken } from "../../shared/services/jwt.service";
import { comparePassword } from "../../shared/services/hash.service";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const repo = UserRepository.getRepository();

  if (!username || !password)
    new ApiError(400, "please insert email and password");

  const checkUserExist = await repo.find(username);
  if (!checkUserExist) new ApiError(404, "user not found");

  const hashedPassword = checkUserExist!.password;
  const checkPassword = comparePassword(password, hashedPassword);
  if (!checkPassword) new ApiError(404, "incorrect email or passwrod");

  const userName = checkUserExist!.id;
  const token = createToken(userName);

  res.status(200).json({
    token,
  });
};
