import express, { NextFunction } from "express";
import { login, register } from "../controllers/userControllers";

const router = express.Router();

router.post("/register", register).post("/login", login);

export { router as userRouter };
