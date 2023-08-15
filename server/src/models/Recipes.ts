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
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema);
