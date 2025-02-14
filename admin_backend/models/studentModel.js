const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idNo: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  year: String,
  specialization: String,
  advisor: String,
  role: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
