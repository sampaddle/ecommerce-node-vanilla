if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
console.log(process.env.TEST);
console.log(process.env.VENDOR_ID);
console.log(process.env.VENDOR_AUTH_CODE);
const { response } = require("express");
const logger = require("morgan");
const express = require("express");
const products = require("./products.js");
// console.log(products.catalogue);
const axios = require("axios");

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

app.post("/checkout", function (req, res) {
  console.log(req.body);
  console.log(req.body.passthrough.join(", "));
  console.log(req.body.breakdown.join(", "));
  axios
    .post(
      "https://sandbox-vendors.paddle.com/api/2.0/product/generate_pay_link",
      {
        vendor_id: process.env.VENDOR_ID,
        vendor_auth_code: process.env.VENDOR_AUTH_CODE,
        product_id: 15246,
        prices: [`USD:${req.body.total}`],
        title: "Ecommerce Purchase",
        quantity_variable: 0,
        custom_message: req.body.breakdown.join(", "),
        passthrough: req.body.passthrough.join(", "),
      }
    )
    .then(function (response) {
      console.log(response.data);
      res.send({
        url: response.data.response.url,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
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
    cart_quantity: result.cart_quantity,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
