require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/productRoutes");



app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database was successful!");
  })
  .catch((error) => {
    console.log("Database connection has failed", error.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the CC Corporate Collection API" });
});

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Welcome to the CC Corporate Collection API");
});
