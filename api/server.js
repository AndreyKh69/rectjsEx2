const express = require("express");
const cors = require("cors");
const db = require("./model/index");
const productController = require("./controllers/product.controller.js");

// ** Settings
const PORT = process.env.PORT || 8888;
const DB_URL =
  process.env.DB_URL ||
  "mongodb://admin:admin@localhost:27017/colmanEx2?authSource=admin";
const app = express();

app.use(cors());
app.use(express.json());

// get MongoDB driver connection
db.mongoose
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

// default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tal & Andrey API v:0.1(Beta)." });
});

// product
app.get("/products", productController.findAll);

// get product by ID
app.get("/products/:id", productController.findOne);

app.get("*", (req, res) => {
  res.json({ message: "Can I help you? @_@" });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
