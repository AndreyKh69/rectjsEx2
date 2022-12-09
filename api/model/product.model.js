const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  desc: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
    min: 0,
  },

  images: [
    {
      type: String,
      require: true,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
