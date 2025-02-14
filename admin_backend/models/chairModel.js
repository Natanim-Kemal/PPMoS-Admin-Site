const mongoose = require("mongoose");

const chairSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idNo: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  role: { type: String, required: true },
});

module.exports = mongoose.model("Chair", chairSchema);
