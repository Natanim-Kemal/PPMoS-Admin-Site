const express = require("express");
const router = express.Router();
const Advisor = require("../models/advisorModel"); // Assuming you have a Student model

// Route to add a student
router.post("/add", async (req, res) => {
  try {
    // Log incoming request body
    console.log("Request Body:", req.body);

    // Create a new student instance from the request body
    const newAdvisor = new Advisor(req.body);

    // Save the student to the database
    await newAdvisor.save();

    // Log success message
    console.log("Advisor added successfully");

    // Respond with success
    res.status(201).json({ message: "Advisor added successfully" });
  } catch (error) {
    // Log error to console
    console.error("Error adding Advisor:", error.message);

    // Respond with error message
    res.status(500).json({ message: "Failed to add advisor" });
  }
});

module.exports = router; // Export the router
