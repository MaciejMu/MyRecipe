import express from "express";
import cors from "cors";
import { userRouter } from "./routes/usersRoute";
import { recipesRouter } from "./routes/recipeRoute";
import createAppError from "./utilis/appError";
import errorHandlerController from "./controllers/errorController";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/recipes", recipesRouter);

app.all("*", (req, res, next) => {
  next(createAppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandlerController);

export default app;
