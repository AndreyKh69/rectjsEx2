const mongoose = require("mongoose");

const Product = require("./product.model");

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },

  lastName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  phoneNumber: {
    type: String,
    require: true,
  },

  address: {
    type: String,
    require: true,
  },

  products: [{ type: String, ref: Product }],

  totalAmount: {
    type: Number,
    require: true,
    min: 0,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
