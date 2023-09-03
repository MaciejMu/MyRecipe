import { NextFunction, Request, Response } from "express";
import createAppError from "../utilis/appError";

const handleCastError = (err: unknown | any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return createAppError(message, 400);
};

const handleDuplicate = (err: unknown | any) => {
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  const message = `Duplicate fields value: ${value}, Please use another value!`;
  return createAppError(message, 400);
};

const handleValidationError = (err: unknown | any) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  console.log(errors);
  const message = `Invalid data! ${errors.join(". ")}`;
  return createAppError(message, 400);
};

const errorHandlerController = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // res.status(err.statusCode).json({
  //   status: err.status,
  //   message: err.message,
  // });

  let error = { ...err };

  if (error.name === "CastError") error = handleCastError(error);
  if (error.code === 11000) error = handleDuplicate(error);
  if (error.name === "ValidationError") error = handleValidationError(error);

  if (error.isOperitional) {
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
