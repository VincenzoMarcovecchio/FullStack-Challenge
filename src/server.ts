require("dotenv").config({ path: "./config.env" });

import express from "express";

import connectDB from "../config/database";
import auth from "./routes/api/auth";
import products from "./routes/api/products";
import validate from "./routes/api/private";
import errorHandler from "./middleware/error";
import cors from "cors";

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", process.env.PORT || 5000);

// @route   GET /
// @desc    Test Base API
// @access  Public
app.get("/", (_req, res) => {
  res.send("API Running");
});

app.use("/api/auth", auth);
app.use("/api/products", products);
app.use("/api/private", validate);

app.use(errorHandler);

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
