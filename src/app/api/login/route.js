import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

// connect db
connectDB();

export async function POST(request) {
  try {
    // get request body
    const { email, password } = await request.json();

    // check if email exists
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { message: "user doesn't exist" },
        { status: 400 }
      );

    // check if password is valid
    const isPwd = await bcrypt.compare(password, user.password);
    if (!isPwd)
      return NextResponse.json(
        { message: "user doesn't exist" },
        { status: 400 }
      );

    // create jwt
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    // send response
    return NextResponse.json({ token }, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Login failed!", error: e.message },
      { status: 500 }
    );
  }
}
