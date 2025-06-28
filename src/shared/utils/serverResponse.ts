import { Response } from "express";

export const successResponse = <T>(
  res: Response,
  data: T,
  statusCode: number
) => {
  res.status(statusCode).json({
    status: "success",
    data: data,
  });
};

export const errorResponse = (
  res: Response,
  status: "error" | "fail",
  statusCode: number,
  err: any
) => {
  res.status(statusCode).json({
    status: status,
    err: err,
  });
};
