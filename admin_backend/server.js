const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

const studentRoutes = require("./routes/studentRoutes");
const deanRoutes = require("./routes/deanRoutes");
const advisorRoutes = require("./routes/advisorRoutes");
const pgCoordinatorRoutes = require("./routes/pgCoordinatorRoutes");
const chairRoutes = require("./routes/chairRoutes");
const signInRoute = require("./routes/signInRoute");
const updateRoute = require("./routes/updateRoute");

app.use("/api/students", studentRoutes);
app.use("/api/deans", deanRoutes);
app.use("/api/chairs", chairRoutes);
app.use("/api/pgcoordinators", pgCoordinatorRoutes);
app.use("/api/advisors", advisorRoutes);
app.use("/api/auth", signInRoute); 
app.use("/api/user", updateRoute);

const PORT = process.env.PORT || 9000; // Ensure the port is set to 9000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});