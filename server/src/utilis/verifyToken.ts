import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import createAppError from "./appError";

dotenv.config({ path: "./.env" });
const JWTSecret = process.env.JWT_SECRET || "";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(
      createAppError("You are not logged in! Please log in to get access.", 401)
    );
  }
  jwt.verify(token, JWTSecret) as { id: string };
  next();
};
