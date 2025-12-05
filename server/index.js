require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

// Environment Variables
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;
const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "d88";
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "24h";

// Validate required environment variables
if (!SECRET_KEY) {
  console.error("ERROR: SECRET_KEY environment variable is required");
  process.exit(1);
}

if (!MONGO_URI) {
  console.error("ERROR: MONGO_URI environment variable is required");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose Schemas
const summaryChartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

const reportsChartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

const SummaryChart = mongoose.model("SummaryChart", summaryChartSchema);
const ReportsChart = mongoose.model("ReportsChart", reportsChartSchema);

// Hardcoded User
const USER = {
  username: "theDemoUser",
  password: "GitHub",
};

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET_KEY, {
      expiresIn: JWT_EXPIRATION,
    });
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("Auth header:", authHeader);
  console.log("Token:", token);

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.error("JWT verification error:", err.message);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

// Chart Data 1 (Summary Page)
app.get("/api/summary-chart", authenticateToken, (req, res) => {
  SummaryChart.find()
    .lean()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.error("Failed to fetch summary chart data", error);
      res.status(500).json({ error: "Failed to fetch summary chart data" });
    });
});

// Chart Data 2 (Reports Page)
app.get("/api/reports-chart", authenticateToken, (req, res) => {
  ReportsChart.find()
    .lean()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.error("Failed to fetch reports chart data", error);
      res.status(500).json({ error: "Failed to fetch reports chart data" });
    });
});

// Function to populate database with initial data
async function populateDatabase() {
  try {
    // Clear and populate Summary Chart data - UNC Charlotte Operational Reductions
    await SummaryChart.deleteMany({});
    const summaryData = [
      { name: "Source Energy", value: 47 },
      { name: "Water Usage", value: 68 },
      { name: "GHG Emissions", value: 37 },
    ];
    await SummaryChart.insertMany(summaryData);
    console.log("Summary chart data populated");

    // Clear and populate Reports Chart data - UNC Charlotte Academic & Research Engagement
    await ReportsChart.deleteMany({});
    const reportsData = [
      { name: "Depts with Sustainability Courses", value: 90 },
      { name: "Research Depts with Sustainability Researchers", value: 97 },
      { name: "Sustainable Electronics Purchasing", value: 92 },
      { name: "Researchers Contributing to Sustainability", value: 37 },
    ];
    await ReportsChart.insertMany(reportsData);
    console.log("Reports chart data populated");
  } catch (error) {
    console.error("Error populating database:", error);
  }
}

mongoose
  .connect(MONGO_URI, { dbName: MONGO_DB_NAME })
  .then(async () => {
    console.log(`Connected to MongoDB database: ${MONGO_DB_NAME}`);
    await populateDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
