const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the CC Corporate Collection API" });
});

app.use("/api/products", productRoutes);

app.listen(3001, () => {
  console.log("Welcome to the CC Corporate Collection API");
});
