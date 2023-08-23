import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  ingredients: [
    {
      type: String,
      require: true,
    },
  ],
  instructions: [
    {
      type: String,
      require: true,
    },
  ],
  imageUrl: {
    type: String,
    require: true,
  },
  cookingTime: {
    type: Number,
    require: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  likesCounter: {
    type: Number,
    require: true,
    default: 0,
  },
  category: {
    type: String,
    // "QUICK AND EASY DINNERS FOR ONE" ||
    // "COOKING FOR TWO" ||
    // "SHEET PAN DINNERS" ||
    // "SLOW COOKER" ||
    // "VEGETARIAN" ||
    // "HEALTHY" ||
    // "MEATLOAF" ||
    // "PASTA" ||
    // "MAIN DISHES" ||
    // "PORK CHOPS" ||
    // "SALADS" ||
    // "BEEF STEAKS" ||
    // "BAKED AND ROASTED CHICKEN" ||
    // "SIDE DISHES",
    require: true,
  },
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema);
