import { connectionStr } from "@/app/lib/db";
import { userSchema } from "@/app/lib/userModal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  let success = false;
  const payload = await request.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const user = new userSchema(payload);
  const result = await user.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
