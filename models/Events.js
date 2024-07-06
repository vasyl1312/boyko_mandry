const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  // additional_image: { type: String },
  // additional_description: { type: String },
});

module.exports = model("Event", eventSchema);
