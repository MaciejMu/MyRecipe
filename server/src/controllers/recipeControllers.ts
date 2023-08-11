import { RecipeModel } from "../models/Recipes";
import { UserModel } from "../models/Users";
import { Request, Response } from "express";

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const response = await RecipeModel.find();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

export const addNewRecipe = async (req: Request, res: Response) => {
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

export const addtoSavedRecipes = async (req: Request, res: Response) => {
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
};

export const getIdOfSavedRecipes = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    res.json(err);
  }
};

export const getSavedRecipes = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user?.savedRecipes },
    });
    res.status(201).json({ savedRecipes });
  } catch (err) {
    res.json(err);
  }
};
