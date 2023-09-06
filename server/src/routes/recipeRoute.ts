import express from "express";
import { verifyToken } from "../utilis/verifyToken";
import {
  addLikesCounter,
  addNewRecipe,
  addtoSavedRecipes,
  getAllRecipes,
  getIdOfSavedRecipes,
  getSavedRecipes,
  getSingleRecipe,
  subtractLikesCounter,
  unsaveRecipe,
  getQuickandFast,
  deleteRecipe,
} from "../controllers/recipeControllers";
import { restrictTo } from "../controllers/authController";

const router = express.Router();

router
  .get("/", getAllRecipes)
  .post("/", verifyToken, addNewRecipe)
  .get("/single-recipe/:recipeID", getSingleRecipe)
  .patch("/unsave", verifyToken, unsaveRecipe)
  .put("/save", verifyToken, addtoSavedRecipes)
  .patch("/counter-add", verifyToken, addLikesCounter)
  .patch("/counter-subtract", verifyToken, subtractLikesCounter)
  .get("/saved-recipes/:userID", getSavedRecipes)
  .get("/saved-recipes/ids/:userID", getIdOfSavedRecipes)
  .get("/Quick-&-Fast", getQuickandFast)
  .delete("/:id", verifyToken, restrictTo("admin"), deleteRecipe);

export { router as recipesRouter };
