const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel"); // Assuming you have a Student model

// Route to add a student
router.post("/add", async (req, res) => {
  try {
    // Log incoming request body
    console.log("Request Body:", req.body);

    // Create a new student instance from the request body
    const newStudent = new Student(req.body);

    // Save the student to the database
    await newStudent.save();

    // Log success message
    console.log("Student added successfully");

    // Respond with success
    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    // Log error to console
    console.error("Error adding student:", error.message);

    // Respond with error message
    res.status(500).json({ message: "Failed to add student" });
  }
});

module.exports = router; // Export the router
