const Product = require("../model/product.model");

// Create and Save a new Product
exports.create = (req, res) => {
  // code here - will be implement at next version ^_^
};

// Retrieve all Product from the database.
exports.findAll = (req, res) => {
  // return all products without any limits
  // next version will be implemented pagination
  Product.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Product with id=" + id });
    });
};
