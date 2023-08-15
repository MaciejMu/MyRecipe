import express from "express";
import { verifyToken } from "../controllers/userControllers";
import {
  addNewRecipe,
  addtoSavedRecipes,
  getAllRecipes,
  getIdOfSavedRecipes,
  getSavedRecipes,
  getSingleRecipe,
  updateLikesCounter,
} from "../controllers/recipeControllers";

const router = express.Router();

router
  .get("/", getAllRecipes)
  .get("/:recipeID", getSingleRecipe)
  .post("/", verifyToken, addNewRecipe)
  .put("/", addtoSavedRecipes)
  .patch("/", updateLikesCounter)
  .get("/saved-recipes/:userID", getSavedRecipes)
  .get("/saved-recipes/ids/:userID", getIdOfSavedRecipes);

export { router as recipesRouter };
