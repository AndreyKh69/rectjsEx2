// ** This file will insert products and orders to Mongo DB
const mongoose = require("mongoose");
const Product = require("./model/product.model");
const Order = require("./model/order.model");

const DB_URL =
  process.env.DB_URL ||
  "mongodb://admin:admin@localhost:27017/colmanEx2?authSource=admin";

// get MongoDB driver connection
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const testProducts = [
  {
    name: "iPhone 9",
    desc: "An apple mobile which is nothing like apple",
    price: 549.99,
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    name: "iPhone X",
    desc: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
  {
    name: "Samsung Universe 9",
    desc: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249.25,
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  },
];

Product.insertMany(testProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
