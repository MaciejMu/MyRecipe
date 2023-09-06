import { NextFunction, Request, Response } from "express";
import createAppError from "../utilis/appError";

const handleCastError = (err: unknown | any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return createAppError(message, 400);
};

const handleDuplicate = (err: unknown | any) => {
  const message = `Recipe exist, Please use another value!`;
  return createAppError(message, 400);
};

const handleValidationError = (err: unknown | any) => {
  console.log(err);
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const message = `Invalid data! ${errors.join(". ")}`;
  return createAppError(message, 400);
};

const errorHandlerController = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err };

  if (error.name === "CastError") error = handleCastError(error);
  if (error.code === 11000) error = handleDuplicate(error);
  if (error.name === "ValidationError") error = handleValidationError(error);

  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  } else {
    console.log("ERROR:", error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};

export default errorHandlerController;
