// --------- CART PAGE DOM MANIPULATION ------ //

let cartData = [];
fetchStoredCart();

// total for the cart
let grandTotal = 0;

// get the cart line item div
const cartContainer = document.getElementById("cart");
// append something to it as a test

// get total divs
const total = document.getElementById("total");
const finalTotal = document.getElementById("finalTotal");

// loop through the items in the product array

console.log(cartData);
let product1Count = 0;
let product2Count = 0;
let product3Count = 0;

let product1Price = 0;
let product2Price = 0;
let product3Price = 0;

// 1. count up all the instances of a product
// 2. generate the cart products based on their count

function populateCart() {
  for (let i = 0; i < cartData.length; i++) {
    // check that cartData is not empty - swap this to build function
    if (cartData != []) {
      // check for instances of first product
      if (cartData[i].product_id === "PR1") {
        product1Count++;
        // make sure it only gets built on the first instance, otherwise update
        if (product1Count === 1) {
          buildCartItem(cartData[i], 1);
          product1Price = cartData[i].price;
          console.log(product1Price);
        } else if (product1Count > 1) {
          updateCartQuantity(cartData[i].product_id, product1Count);
        }
      } else if (cartData[i].product_id === "PR2") {
        product2Count++;
        if (product2Count === 1) {
          buildCartItem(cartData[i], 2);
          product2Price = cartData[i].price;
          console.log(product2Price);
        } else if (product2Count > 1) {
          updateCartQuantity(cartData[i].product_id, product2Count);
        }
      } else if (cartData[i].product_id === "PR3") {
        product3Count++;
        if (product3Count === 1) {
          buildCartItem(cartData[i], 3);
          product3Price = cartData[i].price;
          console.log(product3Price);
        } else if (product3Count > 1) {
          updateCartQuantity(cartData[i].product_id, product3Count);
        }
      }
    }
  }
  calculateTotal();
  console.log(product1Count, product2Count, product3Count);
}

function buildCartItem(product, countID) {
  const cartItem = document.createElement("div");
  cartItem.innerHTML = `<div class="row border-top border-bottom">
            <div class="row main align-items-center">
            <div class="col">
                <div class="row text-muted">${product.name}</div>
                <div class="row">${product.description}</div>
            </div>
            <div class="col">
                <a href="#" id="minusQuantity${product.product_id}">-</a><a href="#" class="border" id=${product.product_id}>1</a
                ><a href="#" id="plusQuantity${product.product_id}">+</a>
            </div>
            <div class="col">
                &euro; ${product.price} <span class="close">&#10005;</span>
            </div>
            </div>
            </div>`;
  cartContainer.appendChild(cartItem);
  const minus = document.getElementById(`minusQuantity${product.product_id}`);
  minus.addEventListener("click", () => {
    const quantity = document.getElementById(`${product.product_id}`);
    let productCount = parseInt(quantity.textContent) - 1;
    if (productCount != 0) {
      quantity.innerHTML = productCount;
      // set the global variable for the product count
      if (countID == 1) {
        product1Count = productCount;
      }
      if (countID == 2) {
        product2Count = productCount;
      }
      if (countID == 3) {
        product3Count = productCount;
      }
    }
    calculateTotal();
  });

  const plus = document.getElementById(`plusQuantity${product.product_id}`);
  plus.addEventListener("click", () => {
    const quantity = document.getElementById(`${product.product_id}`);
    let productCount = parseInt(quantity.textContent) + 1;
    quantity.innerHTML = productCount;
    // set the global variable for the product count
    if (countID == 1) {
      product1Count = productCount;
    }
    if (countID == 2) {
      product2Count = productCount;
    }
    if (countID == 3) {
      product3Count = productCount;
    }
    calculateTotal();
    // OPTIONAL TODO: need to update the localStorage with this count info.
  });
}

function updateCartQuantity(id, quantity) {
  const quantityDiv = document.getElementById(id);
  quantityDiv.innerHTML = quantity;
}

populateCart();

// keep a count of each time you see a certain product
// for product that has a count of 0, build a new line item
// append line item to the Dom
// once finished appending, update the quantities based on the count results

// TODO:
// once quantities have been updated, calculate the total price
// for this, need a function that runs
//  1. once the cart has finished populating
//  2. every time the quantity is updated
// adjust the page with the total price

function calculateTotal() {
  // information we have access to from producCount variables:
  // quantity of the product
  // existence of the product in the basket (if the productCount > 0)
  // the price of the product can be accessed either via localstorage, or via making a call to the back end
  // best not to hard code the values in case they changed in the DB
  // could store the product prices when we loop over the localstorage initially
  let product1Total = 0;
  let product2Total = 0;
  let product3Total = 0;

  product1Total = product1Count * product1Price;
  console.log(product1Total);
  product2Total = product2Count * product2Price;
  console.log(product2Total);
  product3Total = product3Count * product3Price;
  console.log(product3Total);
  grandTotal = product1Total + product2Total + product3Total;
  console.log(grandTotal);
  total.innerHTML = `&pound; ${grandTotal}`;
  finalTotal.innerHTML = `&pound; ${grandTotal}`;
}

// ---------- END CART PAGE DOM MANIPULATION ------ //
