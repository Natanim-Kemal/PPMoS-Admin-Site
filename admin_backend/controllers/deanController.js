const express = require("express");
const router = express.Router();
const Dean = require("../models/deanModel"); // Make sure you have the correct path

router.post("/Deans", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Log the incoming data

    const dean = new Dean(req.body);
    await dean.save();

    console.log("Dean added successfully:", dean); // Log success
    res.status(201).send({ message: "Dean added successfully", advisor });
  } catch (error) {
    console.error("Error adding Dean:", error); // Log any errors
    res.status(400).send({ message: "Error adding Dean", error });
  }
});

module.exports = router;
