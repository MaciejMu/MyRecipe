import express from "express";
import { getUserName, login, register } from "../controllers/userControllers";

const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/name/:userID", getUserName);

export { router as userRouter };
