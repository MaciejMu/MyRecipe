import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ingrediens: [
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
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema);
