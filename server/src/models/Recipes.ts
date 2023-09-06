import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Recipe must have name"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Recipe must have description"],
  },
  ingredients: [
    {
      type: String,
      required: [true, "Recipe must have at least ingredient"],
    },
  ],
  instructions: [
    {
      type: String,
      required: [true, "Recipe must have at least instruction"],
    },
  ],
  imageUrl: {
    type: String,
    required: [true, "Recipe must have image url"],
  },
  cookingTime: {
    type: Number,
    required: [true, "Recipe must have cooking time"],
    min: [1, "Cooking time must be above 1 minute"],
    max: [420, "Cooking time must be below 420 minutes"],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  likesCounter: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    required: [true, "Recipe must have category"],
    enum: {
      values: [
        "Breakfast-and-Brunch",
        "Lunch",
        "Main-Dishes",
        "Healty",
        "Appetizers-and-Snacks",
        "Salad",
        "Side-Dishes",
        "Soup",
        "Bread",
        "Drinks",
        "Desserts",
      ],
      message: "{VALUE} is wrong category",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema);
