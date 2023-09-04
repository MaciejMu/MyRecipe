import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./index";

dotenv.config({ path: "./.env" });
const DB = process.env.DATABASE || "";

mongoose.connect(DB).then((connnection) => {
  console.log("Connected to mongodb!");
});

const server = app.listen(3001, () => {
  console.log("Server running on port 3001");
});

process.on("unhandeledRejection", (err) => {
  console.log(err, err.message);
  server.close(() => process.exit(1));
});
