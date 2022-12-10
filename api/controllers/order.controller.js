const Order = require("../model/order.model");

// Create and Save a new Product
exports.create = (req, res) => {
  // code hare
  console.log(req.body);

  const orderData = req.body; // next version will be added input validation

  const newOrder = new Order(orderData);

  newOrder
    .save()
    .then((data) => {
      res.status(200).send({ orderId: data.id });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

// Retrieve all Orders from the database. (just for testing)
exports.findAll = (req, res) => {
  // return all orders without any limits
  // next version will be implemented pagination

  Order.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving orders.",
      });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Order with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Order with id=" + id });
    });
};
