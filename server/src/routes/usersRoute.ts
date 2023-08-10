import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.status(404).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User created sucessfully!" });
});

router.post("/login", async (req, res) => {
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

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

export { router as userRouter };

export const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (err: unknown) => {
      if (err) return res.sendStatus(403);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
