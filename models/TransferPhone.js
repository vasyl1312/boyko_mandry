const { Schema, model } = require("mongoose");

const transferPhoneSchema = new Schema({
  phone: { type: String, required: true },
});

module.exports = model("TransferPhone", transferPhoneSchema);
