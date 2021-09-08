// make this script work with the page
// alert("This script has been linked");

// need to create a new cart array of objects in local storage
// each time add product button is clicked, corresponding product is added to the cart array
// then from localstorage cart array, create new dom card in card and add it on
// when cart is clicked, items are displayed
// pricing logic needs to add up prices from cart array to display total
// checkout button redirects to cart page.

// let's start by making the card buttons log the correct product to the console when clicked
// make a call to the back end
// loop through products
// when product with matching id is found
// send back that product

window.onload = function () {
  const product_1_btn = document.getElementById("PR1");
  product_1_btn.addEventListener("click", () => {
    console.log("click");
    fetch("http://localhost:3000/products", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        id: "PR1",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
};

// initialise array in localstorage and test
