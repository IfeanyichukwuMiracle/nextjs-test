import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email exists already"],
  },
});

const User = mongoose.model("User", UserModel) || mongoose.models.user;
export default User;
