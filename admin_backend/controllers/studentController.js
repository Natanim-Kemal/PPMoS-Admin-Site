const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel"); // Make sure you have the correct path

router.post("/students", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Log the incoming data

    const student = new Student(req.body);
    await student.save();

    console.log("Student added successfully:", student); // Log success
    res.status(201).send({ message: "Student added successfully", student });
  } catch (error) {
    console.error("Error adding student:", error); // Log any errors
    res.status(400).send({ message: "Error adding student", error });
  }
});

module.exports = router;
