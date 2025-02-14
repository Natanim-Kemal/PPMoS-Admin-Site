const express = require("express");
const router = express.Router();
const Chair = require("../models/chairModel"); // Make sure you have the correct path

router.post("/chairs", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Log the incoming data

    const chair = new Chair(req.body);
    await chair.save();

    console.log("chair added successfully:", chair); // Log success
    res.status(201).send({ message: "chair added successfully", chair });
  } catch (error) {
    console.error("Error adding chair:", error); // Log any errors
    res.status(400).send({ message: "Error adding chair", error });
  }
});

module.exports = router;


