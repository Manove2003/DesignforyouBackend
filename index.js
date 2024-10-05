const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const passport = require("./config/passport"); // Import your passport configuration
const corsOptions = require("./config/corsOptions"); // Import the CORS configuration
const credentials = require("./config/credentials"); // Import the credentials handling

dotenv.config();
connectDB();

const app = express();

// Handle credentials checking before CORS
app.use(credentials);

// CORS middleware with dynamic origin checking and improved logging
app.use(cors(corsOptions));

// Express body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration with a dedicated SESSION_SECRET
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Everything is fine" });
});

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Authentication routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
