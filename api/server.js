const express = require("express");
const cors = require("cors");
const db = require("./model/index");
const productController = require("./controllers/product.controller.js");
const orderController = require("./controllers/order.controller.js");

// ** Settings
const PORT = process.env.PORT || 8888;
const DB_URL =
  process.env.DB_URL ||
  "mongodb://admin:admin@localhost:27017/colmanEx2?authSource=admin";
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// ** Products endpoint
// product
app.get("/products", productController.findAll);
// get product by ID
app.get("/products/:id", productController.findOne);

// ** Order endpoint
// get order by ID
app.get("/order/:id", orderController.findOne);
// create order
app.post("/order", orderController.create);

app.get("*", (req, res) => {
  res.json({ message: "Can I help you? @_@" });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
