import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email exists already"],
  },
  fullname: {
    type: String,
    required: [true, "fullname is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserModel);
export default User;
