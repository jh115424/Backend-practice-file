const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ name: "GTB Turnstone L Desk", price: 1299, category: "Desks" }]);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: "Get product by id" });
});
router.post("/", (req, res) => {
  res.status(201).json({
    message: "Product created",
    product: req.body,
  });
});
module.exports = router;
