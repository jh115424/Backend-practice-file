const mongoose = require("mongoose");

const furnitureItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },

  category: {
    type: String,
    required: true,
    enum: ["Desks", "Lightning", "Chairs"],
  },

  imageURL: {
    type: String,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const Furniture = mongoose.model("Furniture", furnitureItemsSchema);
module.exports = Furniture;
