import { NextFunction, Request, Response } from "express";
import { errorResponse } from "./serverResponse";

export const catchAsync = (fn: Function) => {
  return async (req: Request, res: Response, next?: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err: any) {
      errorResponse(
        res,
        err.statusCode > 500 ? "fail" : "error",
        err.statusCode,
        err
      );
    }
  };
};
