const { default: mongoose } = require("mongoose");

const deliveryPartnerModel = new mongoose.Schema({
  name: String,
  mobile: String,
  password: String,
  city: String,
  address: String,
});

export const deliveryPartnersSchema =
  mongoose.models.deliveryPartners ||
  mongoose.model("deliveryPartners", deliveryPartnerModel);
