import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
  },
  savedRecipes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export const UserModel = mongoose.model("user", UserSchema);
