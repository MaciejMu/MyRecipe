import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  savedRecipes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

export const UserModel = mongoose.model("user", UserSchema);
