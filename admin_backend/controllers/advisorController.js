const express = require("express");
const router = express.Router();
const Advisor = require("../models/advisorModel"); // Make sure you have the correct path

router.post("/advisors", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Log the incoming data

    const advisor = new Advisor(req.body);
    await advisor.save();

    console.log("Advisor added successfully:", advisor); // Log success
    res.status(201).send({ message: "Advisor added successfully", advisor });
  } catch (error) {
    console.error("Error adding advisor:", error); // Log any errors
    res.status(400).send({ message: "Error adding advisor", error });
  }
});

module.exports = router;
