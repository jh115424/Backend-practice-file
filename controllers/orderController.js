const Order = require("../models/Order");
const mongoose = require("mongoose");

const createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      subtotal,
      memberDiscount,
      salesTax,
      orderTotal,
    } = req.body;

    const userId = req.user.userId;
    const order = await Order.create({
      user: userId,
      items,
      shippingAddress,
      subtotal,
      memberDiscount,
      salesTax,
      orderTotal,
    });

    return res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate(
      "user",
      "email firstName lastName",
    );
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const orders = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );

    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {

    createOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus
};