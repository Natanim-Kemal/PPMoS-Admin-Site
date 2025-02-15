const express = require('express');
const jwt = require('jsonwebtoken');
const Advisor = require('../models/advisorModel');
const Dean = require('../models/deanModel');
const Student = require('../models/studentModel');
const PgCoordinator = require('../models/pgCoordinator');
const Chair = require('../models/chairModel');
const router = express.Router();


router.post('/signin', async (req, res) => {
  const { role, username, password } = req.body;

  try {
    let user;
    switch (role) {
      case "Advisor":
      case "advisor":
        user = await Advisor.findOne({ username });
        break;
      case "Dean":
      case "dean":
        user = await Dean.findOne({ username });
        break;
      case "Student":
      case "student":
        user = await Student.findOne({ username });
        break;
      case "PG-coordinator":
      case "PgCoordinator":
      case "pgCoordinator":
      case "pgcoordinator":
        user = await PgCoordinator.findOne({ username });
        break;
      case "Chair":
      case "chair":
        user = await Chair.findOne({ username });
        break;
      default:
        return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) {
      return res.status(400).json({ message: "Invalid username or role" });
    }

    if (!password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: "Login successful!",
      token: token,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;