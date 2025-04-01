import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { NextResponse } from "next/server";

// connect db
connectDB();

export async function POST(request) {
  try {
    // get request body
    const { fullname, email, password, confirmPassword } = await request.json();

    // chack if confirmPassword === password
    if (password !== confirmPassword)
      return NextResponse.json(
        { message: "Passwords don't match" },
        { status: 400 }
      );

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user to database
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    // send response
    return NextResponse.json(
      { message: "Signup successful!" },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Signup failed!", error: e.message },
      { status: 500 }
    );
  }
}
