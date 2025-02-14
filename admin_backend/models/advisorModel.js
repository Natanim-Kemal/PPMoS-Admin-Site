const mongoose = require("mongoose");

const advisorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idNo: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  students: Number,
  role: { type: String, required: true },
});

module.exports = mongoose.model("Advisor", advisorSchema);
