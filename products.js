const catalogue = [
  {
    name: "Product 1",
    price: 5.99,
    description: "This is product number 1",
    product_id: "PR1",
  },
  {
    name: "Product 2",
    price: 10.99,
    description: "This is product number 2",
    product_id: "PR2",
  },
  {
    name: "Product 3",
    price: 15.99,
    description: "This is product number 3",
    product_id: "PR3",
  },
];

module.exports = {
  foo: function () {
    console.log("foo test");
  },
  bar: function () {
    console.log("bar test");
  },
  catalogue,
};
