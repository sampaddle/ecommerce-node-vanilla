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

// will need a function that pulls data from localstorage on pageload and uses it to populate the basket
// basket should always be populated from localstorage
// the populate basket function should always clear the basket before it populates it

window.onload = function () {
  // initialise the cart
  let cartData = [];

  function fetchStoredCart() {
    // check local storage for cart items, fill cart if existing
    if (localStorage.cart) {
      let restoredObjects = localStorage.getItem("cart");
      restoredObjects = JSON.parse(restoredObjects);
      console.log(restoredObjects);
      cartData = restoredObjects;
      // fillCart(restoredObjects)
    }
  }
  // get the cart data on pageload ready for use
  fetchStoredCart();

  // ------ HOME PAGE DOM MANIPULATION ------ //

  // add product 1 to the cart
  const product_1_btn = document.getElementById("PR1");
  product_1_btn.addEventListener("click", () => {
    getProductInfo("PR1");
  });

  // add product 2 to the cart
  const product_2_btn = document.getElementById("PR2");
  product_2_btn.addEventListener("click", () => {
    getProductInfo("PR2");
  });

  // add product 3 to the cart
  const product_3_btn = document.getElementById("PR3");
  product_3_btn.addEventListener("click", () => {
    getProductInfo("PR3");
  });

  const cart = document.getElementById("cart");

  // ------- END HOME PAGE DOM MANIPULATION ------ //

  function getProductInfo(id) {
    // request product data from backend using ID
    fetch("http://localhost:3000/products", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(cartData);
        addToStorage(data);
      });
  }

  function addToStorage(data) {
    // add data to cart array
    cartData.push(data);
    // add updated cart array to storage
    localStorage.setItem("cart", JSON.stringify(cartData));
    // leave the duplicates in the array. These will be used to calculate quantities
  }

  // --------- CART PAGE DOM MANIPULATION ------ //

  // ---------- END CART PAGE DOM MANIPULATION ------ //
};

// initialise array in localstorage and test
