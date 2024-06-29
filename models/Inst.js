const { Schema, model } = require("mongoose");

const instSchema = new Schema({
  instagram: { type: String, required: true },
});

module.exports = model("Instagram", instSchema);
