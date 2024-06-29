const { Schema, model } = require("mongoose");

const mainEmailSchema = new Schema({
  email: { type: String, required: true },
});

module.exports = model("MainEmail", mainEmailSchema);
