const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const studentRoutes = require("./routes/studentRoutes");
const deanRoutes = require("./routes/deanRoutes");
const advisorRoutes = require("./routes/advisorRoutes");
const pgCoordinatorRoutes = require("./routes/pgCoordinatorRoutes");
const chairRoutes = require("./routes/chairRoutes");

app.use(express.json());  // To parse JSON request bodies

// Route handling
app.use("/api/students", studentRoutes);
app.use("/api/deans", deanRoutes);
app.use("/api/advisors", advisorRoutes);
app.use("/api/pgCoordinators", pgCoordinatorRoutes);
app.use("/api/chairs", chairRoutes);

module.exports = app;
