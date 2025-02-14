const express = require("express");
const router = express.Router();
const PgCoordinator = require("../models/pgCoordinator"); // Make sure you have the correct path

router.post("/pgcoordinators", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Log the incoming data

    const pgCoordinator = new PgCoordinator(req.body);
    await pgCoordinator.save();

    console.log("PG-coordinator added successfully:", pgCoordinator); // Log success
    res.status(201).send({ message: "PG-coordinator added successfully", advisor });
  } catch (error) {
    console.error("Error adding PG-coordinator:", error); // Log any errors
    res.status(400).send({ message: "Error adding PG-coordinator", error });
  }
});

module.exports = router;
