const express = require("express");
const router = express.Router();
const PgCoordinator = require("../models/pgCoordinator"); // Assuming you have a Student model

// Route to add a student
router.post("/add", async (req, res) => {
  try {
    // Log incoming request body
    console.log("Request Body:", req.body);

    // Create a new student instance from the request body
    const newPgCoordinator = new PgCoordinator(req.body);

    // Save the student to the database
    await newPgCoordinator.save();

    // Log success message
    console.log("Pg-Coordinator added successfully");

    // Respond with success
    res.status(201).json({ message: "Pg-Coordinator added successfully" });
  } catch (error) {
    // Log error to console
    console.error("Error adding Pg-Coordinator:", error.message);

    // Respond with error message
    res.status(500).json({ message: "Failed to add Pg-Coordinator" });
  }
});

module.exports = router; // Export the router
