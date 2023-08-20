import express from "express";
import { verifyToken } from "../controllers/userControllers";
import {
  addLikesCounter,
  addNewRecipe,
  addtoSavedRecipes,
  getAllRecipes,
  getIdOfSavedRecipes,
  getRecipesByCategory,
  getSavedRecipes,
  getSingleRecipe,
  subtractLikesCounter,
  unsaveRecipe,
} from "../controllers/recipeControllers";

const router = express.Router();

router
  .get("/", getAllRecipes)
  .get("/single-recipe/:recipeID", getSingleRecipe)
  // .get("/:category", getRecipesByCategory)
  .post("/", verifyToken, addNewRecipe)
  .patch("/unsave", verifyToken, unsaveRecipe)
  .put("/save", verifyToken, addtoSavedRecipes)
  .patch("/counter-add", verifyToken, addLikesCounter)
  .patch("/counter-subtract", verifyToken, subtractLikesCounter)
  .get("/saved-recipes/:userID", getSavedRecipes)
  .get("/saved-recipes/ids/:userID", getIdOfSavedRecipes);

export { router as recipesRouter };
