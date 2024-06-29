const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = model("Contact", contactSchema);
