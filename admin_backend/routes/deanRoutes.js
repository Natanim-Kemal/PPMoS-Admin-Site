const express = require("express");
const router = express.Router();
const Dean = require("../models/deanModel"); // Assuming you have a Student model

// Route to add a student
router.post("/add", async (req, res) => {
  try {
    // Log incoming request body
    console.log("Request Body:", req.body);

    // Create a new student instance from the request body
    const newDean = new Dean(req.body);

    // Save the student to the database
    await newDean.save();

    // Log success message
    console.log("Dean added successfully");

    // Respond with success
    res.status(201).json({ message: "Dean added successfully" });
  } catch (error) {
    // Log error to console
    console.error("Error adding Dean:", error.message);

    // Respond with error message
    res.status(500).json({ message: "Failed to add Dean" });
  }
});

module.exports = router; // Export the router
