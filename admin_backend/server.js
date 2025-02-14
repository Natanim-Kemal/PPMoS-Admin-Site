const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db"); // Import the connectDB function

dotenv.config(); // Load environment variables

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const studentRoutes = require("./routes/studentRoutes");
const deanRoutes = require("./routes/deanRoutes");
const advisorRoutes = require("./routes/advisorRoutes");
const pgCoordinatorRoutes = require("./routes/pgCoordinatorRoutes");
const chairRoutes = require("./routes/chairRoutes");

// Add other routes here

app.use("/api/students", studentRoutes);
app.use("/api/deans", deanRoutes);
app.use("/api/chairs", chairRoutes)
app.use("/api/pgcoordinators", pgCoordinatorRoutes)
app.use("/api/advisors", advisorRoutes)

// Add other route uses here

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
