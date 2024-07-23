import { connectionStr } from "@/app/lib/db";
import { userSchema } from "@/app/lib/userModal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  try {
    let success = false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });

    const reqBody = await request.json();
    const { name, email, password, city, address, mobile } = reqBody;
    console.log(name, email, password, city, address, mobile);

    const user =await userSchema.findOne({ email });
    if (user) {
      return NextResponse.json({
        message: "User already exists",
        success: false,
      });
    }
    const salt =await bcryptjs.genSalt(10);
    const hashedPassword =await bcryptjs.hash(password, salt);
    const newUser = new userSchema({
      name,
      email,
      password: hashedPassword,
      city,
      address,
      mobile,
    });
    const result = await newUser.save();
    console.log(result);
    if (result) {
      success = true;
    }
    return NextResponse.json({ result, success });
  } catch (error) {
    console.log("Error in creating signup user: " + error.message);
  }
}
