import { RecipeModel } from "../models/Recipes";
import { UserModel } from "../models/Users";
import { Request, Response } from "express";

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let query = RecipeModel.find(queryObj);
    const numOfRecipes = await RecipeModel.countDocuments(queryObj);

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 8;
    const skip = (page - 1) * limit;

    query = query
      .sort({
        createdAt: -1,
        likesCounter: -1,
      })
      .skip(skip)
      .limit(limit);

    const response = await query;

    if (skip > numOfRecipes) throw new Error("This page does't exist!");

    res.json({ numOfRecipes, recipes: response });
  } catch (err) {
    res.json(err);
  }
};

export const getSingleRecipe = async (req: Request, res: Response) => {
  try {
    const response = await RecipeModel.findById(req.params.recipeID);
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

export const unsaveRecipe = async (req: Request, res: Response) => {
  try {
    const recipeID = req.body.recipeID;
    const userID = req.body.userID;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userID,
      { $pull: { savedRecipes: recipeID } },
      { new: true }
    );
    res.json({ updatedUser });
  } catch (err) {
    res.status(500).json(err);
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

export const addLikesCounter = async (req: Request, res: Response) => {
  try {
    const recipeID = req.body.recipeID;
    const recipe = await RecipeModel.findByIdAndUpdate(
      recipeID,
      { $inc: { likesCounter: 1 } },
      { new: true }
    );
    res.json(recipe);
  } catch (err) {
    res.json(err);
  }
};

export const subtractLikesCounter = async (req: Request, res: Response) => {
  try {
    const recipeID = req.body.recipeID;
    const recipe = await RecipeModel.findByIdAndUpdate(
      recipeID,
      { $inc: { likesCounter: -1 } },
      { new: true }
    );
    res.json(recipe);
  } catch (err) {
    res.json(err);
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

export const getQuickandFast = async (req: Request, res: Response) => {
  try {
    const response = await RecipeModel.find({
      cookingTime: { $lte: 30 },
      category: { $ne: "Drinks" },
    }).sort({ likesCounter: -1 });
    res.status(201).json(response);
  } catch (err) {
    res.json(err);
  }
};
