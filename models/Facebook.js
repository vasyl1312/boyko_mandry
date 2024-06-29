const { Schema, model } = require("mongoose");

const facebookSchema = new Schema({
  facebook: { type: String, required: true },
});

module.exports = model("Facebook", facebookSchema);
