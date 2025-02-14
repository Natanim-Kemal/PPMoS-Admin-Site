const express = require('express');
const bcrypt = require('bcrypt'); // Password hashing
const jwt = require('jsonwebtoken'); // JWT generation
const User = require('../models/User'); // User model for different roles

const router = express.Router();

// Signin route with JWT generation
router.post('/signin', async (req, res) => {
  const { role, username, password } = req.body;

  try {
    // Find user by username and role
    const user = await User.findOne({ username, role });

    // If user doesn't exist, return an error
    if (!user) {
      return res.status(400).json({ message: "Invalid username or role" });
    }

    // Compare password with the stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token with user ID and role
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token back to the frontend
    res.status(200).json({
      message: "Login successful!",
      token: token, // Send token back to the frontend
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
