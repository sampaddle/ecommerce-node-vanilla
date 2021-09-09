const { response } = require("express");
const logger = require("morgan");
const express = require("express");
const products = require("./products.js");
// console.log(products.catalogue);

// create instance of express app
const app = express();

// logs activity to the console e.g. GET requests
app.use(logger("dev"));
// Used to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies

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

// cart route
app.get("/cart", function (req, res) {
  res.render("pages/cart.ejs");
});

app.post("/products", function (req, res) {
  console.log(req.body.id);
  console.log(products.catalogue);
  // find the matching product from array
  let result = products.catalogue.filter(
    (product) => product.product_id == req.body.id
  );
  console.log(result[0]);
  result = result[0];
  // send back product
  res.send({
    description: result.description,
    name: result.name,
    price: result.price,
    product_id: result.product_id,
  });
});

var port = 3000;

app.listen(port, function () {
  console.log(`App running on port ${port}`);
});
