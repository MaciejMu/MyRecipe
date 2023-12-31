import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { UserModel } from "../models/Users";
import createAppError from "../utilis/appError";

dotenv.config({ path: "./.env" });
const JWTSecret = process.env.JWT_SECRET || "";

export const register = async (req: Request, res: Response) => {
  const { username, password, confirmPassword } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.status(400).json({ message: "User already exists!" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  UserModel.create({ username: req.body.username, password: hashedPassword });

  res.json({ message: "User created sucessfully!" });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "User doesn't exists!" });
  }

  const isPasswordCorrect =
    user.password && (await bcrypt.compare(password, user.password));

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Password is incorect" });
  } else if (user) {
    const token = jwt.sign({ id: user._id }, JWTSecret);
    res.json({ token, userID: user._id });
  }
};

export const restrictTo = (role: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserModel.findById(req.body.id);

    if (user?.role !== role) {
      return next(
        createAppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};
