const Furniture = require("../models/Product");
const mongoose = require("mongoose");

const getAllFurniture = async (req, res) => {
  try {
    const filter = {};

    // update section with filter and sort
    if (req.query.category) {
      filter.category = req.query.category;
    }

    let sortOption = {};

    if (req.query.sort === "price-low-to-high") {
      sortOption = { price: 1 }; //ascending
    }
    if (req.query.sort === "price-high-to-low") {
      sortOption = { price: -1 }; //descending
    }
    if (req.query.sort === "name-a-to-z") {
      sortOption = { name: 1 }; //alphabetical
    }
    if (req.query.sort === "name-z-to-a") {
      sortOption = { name: -1 };
    }
    // ^updates section with filter amd sort
    // const furnitures = await Furniture.find({});

    const furniture = await Furniture.find(filter).sort(sortOption);
    res.status(200).json(furniture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all furniture

const getFurnitureById = async (req, res) => {
  try {
    // validation of the ID before querying the database
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    // ^ validation of the ID before querying the database
    const furniture = await Furniture.findById(req.params.id);
    if (!furniture) {
      return res.status(404).json({ message: "Desk not found" });
    }
    res.status(200).json(furniture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//POST create new furniture

const createFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.create(req.body);
    res.status(201).json(furniture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//PUT update furniture

const updateFurniture = async (req, res) => {
  try {
    // validation of the ID before querying the database
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const furniture = await Furniture.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!furniture) {
      return res.status(404).json({ message: "furniture not found" });
    }
    res.status(200).json(furniture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE furniture

const deleteFurniture = async (req, res) => {
  try {
    // validation of the ID before querying the database
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const furniture = await Furniture.findByIdAndDelete(req.params.id);
    if (!furniture) {
      return res.status(404).json({ message: "Furniture not found" });
    }
    res.status(200).json({ message: "Furniture deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFeaturedFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.find({ featured: true });
    res.status(200).json(furniture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFurniture,
  getFurnitureById,
  createFurniture,
  updateFurniture,
  deleteFurniture,
  getFeaturedFurniture,
};

// CRUD Operation.       HTTP Method.       Example Route.                  What It Does

// Create                POST               POST /api/products              Add a new product
// Read (all)            GET                GET /api/products               Get all products
// Update                PUT                PUT /api/products/:id           Update a product
// Delete                DELETE             DELETE /api/products/:id        Delete a product




// Go to your Atlas dashboard, click Data Explorer in the left sidebar, 
// click Databases and Collections, expand Cluster0, expand the test database, 
// and click your furnitures collection.