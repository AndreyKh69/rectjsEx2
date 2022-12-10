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
    price: 899.0,
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
  {
    name: "Microsoft Surface Laptop 4",
    desc: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499.99,
    images: [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    ],
  },
  {
    name: "HP Pavilion 15-DK1056WM",
    desc: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099.0,
    images: [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    ],
  },
  {
    name: "Brown Perfume",
    desc: "Royal Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40.0,
    images: [
      "https://i.dummyjson.com/data/products/12/1.jpg",
      "https://i.dummyjson.com/data/products/12/2.jpg",
      "https://i.dummyjson.com/data/products/12/3.png",
      "https://i.dummyjson.com/data/products/12/4.jpg",
      "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    ],
  },
  {
    name: "Hyaluronic Acid Serum",
    desc: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19.77,
    images: [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
      "https://i.dummyjson.com/data/products/16/4.jpg",
      "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    ],
  },
  {
    name: "Flying Wooden Bird",
    desc: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm.",
    price: 51.0,
    images: [
      "https://i.dummyjson.com/data/products/27/1.jpg",
      "https://i.dummyjson.com/data/products/27/2.jpg",
      "https://i.dummyjson.com/data/products/27/3.jpg",
      "https://i.dummyjson.com/data/products/27/4.jpg",
      "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    ],
  },
];

// ** Insert Products
Product.insertMany(testProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// ** Insert Order

const testOrder = {
  firstName: "John",
  lastName: "Smith",
  email: "john.smith@gmail.com",
  phoneNumber: "123-456-1234",
  address: "LocalHost",
  // products: [testProducts[0], testProducts[1]],
  products: [],
  totalAmount: 1448.99,
};

// ** find all iPhone products
Product.find({ name: /.*iPhone.*/ })
  .then((data) => {
    // const productArr = data;
    testOrder.products.push(data);
    console.log(testOrder);
    Order.insertMany(testOrder)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((err) => {
    console.log("Failed to locate products", err);
    process.exit();
  });
