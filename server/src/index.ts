import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/usersRoute";
import { recipesRouter } from "./routes/recipeRoute";

dotenv.config({ path: "./.env" });
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const DB = process.env.DATABASE || "";

mongoose.connect(DB).then((connnection) => {
  console.log("Connected to mongodb!");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
