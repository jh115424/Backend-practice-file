const Furniture = require("../models/Product");

const getAllFurniture = async (req, res) => {
  try {
    const furnitures = await Furniture.find({});
    res.status(200).json(furnitures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET all movies

const getFurnitureById = async (req, res) => {
  try {
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
    const furniture = await Furniture.findByIdAndDelete(req.params.id);
    if (!furniture) {
      return res.status(404).json({ message: "Furniture not found" });
    }
    res.status(200).json({ message: "Furniture deleted successfully" });
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
};
