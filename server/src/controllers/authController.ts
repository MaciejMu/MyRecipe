import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { UserModel } from "../models/Users";

dotenv.config({ path: "./.env" });
const JWTSecret = process.env.JWT_SECRET || "";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.status(404).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User created sucessfully!" });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "User doesn't exists!" });
  }

  const isPasswordCorrect =
    user.password && (await bcrypt.compare(password, user.password));

  if (!isPasswordCorrect) {
    res.json({ message: "Username or Password is incorect" });
  }

  if (user) {
    const token = jwt.sign({ id: user._id }, JWTSecret);
    res.json({ token, userID: user._id });
  }
};
