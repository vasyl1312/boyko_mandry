const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: { type: Date.now, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = model("Event", eventSchema);
