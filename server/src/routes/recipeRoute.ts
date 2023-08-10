import express from "express";
import { RecipeModel } from "../models/Recipes";
import { UserModel } from "../models/Users";
import { verifyToken } from "./usersRoute";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", verifyToken, async (req, res) => {
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.put("/", verifyToken, async (req, res) => {
  const recipe = await RecipeModel.findById(req.body.recipeID);
  const user = await UserModel.findById(req.body.userID);
  try {
    //@ts-ignore
    user?.savedRecipes.push(recipe);
    await user?.save();
    res.status(201).json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/saved-recipes/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

router.get("/saved-recipes/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user?.savedRecipes },
    });
    res.status(201).json({ savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

export { router as recipesRouter };
