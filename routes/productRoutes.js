const express = require("express");
const router = express.Router();

const {
  getAllFurniture,
  getFurnitureById,
  createFurniture,
  updateFurniture,
  deleteFurniture,
  getFeaturedFurniture,
} = require("../controllers/productController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", getAllFurniture);
router.get("/featured", getFeaturedFurniture);
router.get("/:id", getFurnitureById);
router.post("/", protect, adminOnly, createFurniture);
router.put("/:id", protect, adminOnly, updateFurniture);
router.delete("/:id", protect, adminOnly, deleteFurniture);

// OLD INLINE ROUTES - before controller refactor

// router.get("/", (req, res) => {
//   res.json([{ name: "GTB Turnstone L Desk", price: 1299, category: "Desks" }]);
// });

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   res.json({ message: "Get product by id" });
// });
// router.post("/", (req, res) => {
//   res.status(201).json({
//     message: "Product created",
//     product: req.body,
//   });
// });
module.exports = router;
