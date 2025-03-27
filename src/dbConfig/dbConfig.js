import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/fundsai");
    console.log("DB connected!");
  } catch (error) {
    console.log("DB Connection failed!");
    console.log(error);
    return;
  }
}
