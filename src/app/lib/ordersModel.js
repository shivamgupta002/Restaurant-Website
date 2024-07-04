const { default: mongoose } = require("mongoose");

const orderModel = new mongoose.Schema({
  user_Id: mongoose.Schema.Types.ObjectId,
  foodItemId: String,
  resto_id: mongoose.Schema.Types.ObjectId,
  deliver_Id: Strmongoose.Schema.Types.ObjectId,
  status: String,
  amount: String,
});
export const orderSchema =
  mongoose.models.orderModel || mongoose.model("orders", orderModel);
