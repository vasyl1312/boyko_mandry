const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  show_price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price_per_hour: { type: String, required: true },
  price_per_day: { type: String, required: true },
});

module.exports = model("Service", serviceSchema);
