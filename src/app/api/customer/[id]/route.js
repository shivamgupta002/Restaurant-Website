import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  //   console.log(content.params.id);
  const id = content.params.id;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const details = await restaurantSchema.findOne({ _id: id });
  const foodItem = await foodSchema.find({ resto_id: id });
  return NextResponse.json({ success: true, details, foodItem });
}
