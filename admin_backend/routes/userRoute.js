const express = require('express');
const Advisor = require('../models/advisorModel');
const Dean = require('../models/deanModel');
const Student = require('../models/studentModel');
const PgCoordinator = require('../models/pgCoordinator');
const Chair = require('../models/chairModel');
const router = express.Router();

router.put('/update', async (req, res) => {
  const { attributes, user } = req.body;
  const userId = user.id;
  const role = user.role;

  try {

    let user;
    switch (role) {
      case "Advisor":
      case "advisor":
        user = await Advisor.findByIdAndUpdate(userId, attributes, { new: true });
        break;
      case "Dean":
      case "dean":
        user = await Dean.findByIdAndUpdate(userId, attributes, { new: true });
        break;
      case "Student":
      case "student":
        user = await Student.findByIdAndUpdate(userId, attributes, { new: true });
        break;
      case "PG-coordinator":
      case "PgCoordinator":
      case "pgCoordinator":
      case "pgcoordinator":
        user = await PgCoordinator.findByIdAndUpdate(userId, attributes, { new: true });
        break;
      case "Chair":
      case "chair":
        user = await Chair.findByIdAndUpdate(userId, attributes, { new: true });
        break;
      default:
        return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Update successful!",
      user: user,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post('/get', async (req, res) => {
  const { user } = req.body;
  const userId = user.id;
  const role = user.role;

  try {
    let fetchedUser;
    switch (role) {
      case "Advisor":
      case "advisor":
        fetchedUser = await Advisor.findById(userId);
        break;
      case "Dean":
      case "dean":
        fetchedUser = await Dean.findById(userId);
        break;
      case "Student":
      case "student":
        fetchedUser = await Student.findById(userId);
        break;
      case "PG-coordinator":
      case "PgCoordinator":
      case "pgCoordinator":
      case "pgcoordinator":
        fetchedUser = await PgCoordinator.findById(userId);
        break;
      case "Chair":
      case "chair":
        fetchedUser = await Chair.findById(userId);
        break;
      default:
        return res.status(400).json({ message: "Invalid role" });
    }

    if (!fetchedUser) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json(fetchedUser);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;