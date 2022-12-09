const express = require("express");
const mongoose = require("mongoose");

// ** configuration
const port = 8888;

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
