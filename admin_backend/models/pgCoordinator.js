const mongoose = require("mongoose");

const pgCoordinatorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  idNo: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  role: { type: String, required: true },
});

module.exports = mongoose.model("Pg-Coordinator", pgCoordinatorSchema);
