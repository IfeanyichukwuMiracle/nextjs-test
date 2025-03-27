import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

import { NextResponse } from "next/server";

// connect db
connectDB();

export async function GET(request) {
  console.log("hit");
  return NextResponse.json({ msg: "hello" });
}
