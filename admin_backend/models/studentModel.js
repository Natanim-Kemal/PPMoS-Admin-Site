const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idNo: { type: String, unique: true },
  username: { type: String, unique: true },
  role: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  password: String,
  department: String,
  year: String,
  phoneNo: Number,
  specialization: String,
  advisor: String
});

module.exports = mongoose.model("Student", studentSchema);