import express from "express";
import { getUserName } from "../controllers/userControllers";
import { login, register } from "../controllers/authController";

const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/name/:userID", getUserName);

export { router as userRouter };
