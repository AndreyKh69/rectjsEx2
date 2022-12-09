const dbConfig =
  process.env.DB_URL ||
  "mongodb://admin:admin@localhost:27017/colmanEx2?authSource=admin";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.product = require("./product.model.js")(mongoose);
db.order = require("./order.model.js")(mongoose);

module.exports = db;
