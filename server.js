const { response } = require("express");
const logger = require("morgan");
const express = require("express");
const products = require("./products.js");
console.log(products.catalogue);

// create instance of express app
const app = express();

// logs activity to the console e.g. GET requests
app.use(logger("dev"));

// serve js and html in ejs
app.set("view engine", "ejs");

// we want to send css, images and other static files
app.use(express.static("views"));

app.set("views", __dirname + "/views");

// home route
app.get("/", function (req, res) {
  res.render("pages/index", {
    products: products.catalogue,
  });
});

// about route
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

var port = 3000;

app.listen(port, function () {
  console.log(`App running on port ${port}`);
});
