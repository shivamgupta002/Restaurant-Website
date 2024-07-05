import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result =await restaurantSchema.find();
  result = result.map((item) => item?.city?.charAt(0).toUpperCase()+item.city.slice(1)); //   {"success":true,"result":["Khairthal","Khairthal","Khairthal","Khairthal"]}
  result = [...new Set(result.map((item) => item))]; //{"success":true,"result":["Khairthal"]}
  return NextResponse.json({ success: true, result });
}
