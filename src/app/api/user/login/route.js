import { connectionStr } from "@/app/lib/db";
import { userSchema } from "@/app/lib/userModal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

export async function POST(request) {
  let success = false;
  try {
    await mongoose.connect(connectionStr, { useNewUrlParser: true });

    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await userSchema.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Email Not found" }, { status: 400 });
    }
    const validPassword = bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Check your credentials" },
        { status: 400 }
      );
    }

    if (user) {
      success = true;
    }
    return NextResponse.json({ user, success });
  } catch (error) {
    console.log("Error while login " + error.message);
  }
}
