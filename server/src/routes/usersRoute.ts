import express from "express";
import { getAllUsers, getUserName } from "../controllers/userControllers";
import { login, register } from "../controllers/authController";

const router = express.Router();

router
  .get("/", getAllUsers)
  .post("/register", register)
  .post("/login", login)
  .get("/name/:userID", getUserName);

export { router as userRouter };
