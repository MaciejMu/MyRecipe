import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import createAppError from "./appError";

dotenv.config({ path: "./.env" });
const JWTSecret = process.env.JWT_SECRET || "";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWTSecret, (err: unknown) => {
      if (err) return res.sendStatus(403);
    });
  } else {
    return next(createAppError("You are not logged in!", 401));
  }
  next();
};
