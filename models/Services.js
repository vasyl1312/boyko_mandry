const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  show_price: { type: String, required: true },
  description: { type: String, required: true },
  category_1: { type: String, required: true },
  price_per_hour_1: { type: String, required: true },
  price_per_day_1: { type: String, required: true },
  category_2: { type: String },
  price_per_hour_2: { type: String },
  price_per_day_2: { type: String },
  category_3: { type: String },
  price_per_hour_3: { type: String },
  price_per_day_3: { type: String },
});

module.exports = model("Service", serviceSchema);
