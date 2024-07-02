const { Schema, model } = require("mongoose");

const mainPhoneSchema = new Schema({
  phone: { type: String, required: true },
});

module.exports = model("MainPhone", mainPhoneSchema);
