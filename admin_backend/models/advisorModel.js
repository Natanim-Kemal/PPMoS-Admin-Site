const mongoose = require("mongoose");

const advisorSchema = new mongoose.Schema({
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
  students: Number,
  phoneNo: Number,
  specialization: String,
  currentStudents: Number,
});

module.exports = mongoose.model("Advisor", advisorSchema);
