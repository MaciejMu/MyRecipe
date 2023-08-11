import express from "express";
import { verifyToken } from "../controllers/userControllers";
import {
  addNewRecipe,
  addtoSavedRecipes,
  getAllRecipes,
  getIdOfSavedRecipes,
  getSavedRecipes,
} from "../controllers/recipeControllers";

const router = express.Router();

router
  .get("/", getAllRecipes)
  .post("/", verifyToken, addNewRecipe)
  .put("/", addtoSavedRecipes)
  .get("/saved-recipes/:userID", getSavedRecipes)
  .get("/saved-recipes/ids/:userID", getIdOfSavedRecipes);

export { router as recipesRouter };
