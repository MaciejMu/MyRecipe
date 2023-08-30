import { Request, Response } from "express";
import { UserModel } from "../models/Users";
import catchAsync from "../utilis/catchAsync";

export const getUserName = catchAsync(async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.params.userID);
  res.json(user?.username);
});
