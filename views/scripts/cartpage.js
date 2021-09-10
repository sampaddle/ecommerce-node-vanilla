// --------- CART PAGE DOM MANIPULATION ------ //

let cartData = [];
fetchStoredCart();

// get the cart line item div
const cartContainer = document.getElementById("cart");
// append something to it as a test

// loop through the items in the product array

console.log(cartData);
let product1Count = 0;
let product2Count = 0;
let product3Count = 0;

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
          buildCartItem(cartData[i]);
        } else if (product1Count > 1) {
          updateCartQuantity(cartData[i].product_id, product1Count);
        }
      } else if (cartData[i].product_id === "PR2") {
        product2Count++;
        if (product2Count === 1) {
          buildCartItem(cartData[i]);
        } else if (product2Count > 1) {
          updateCartQuantity(cartData[i].product_id, product2Count);
        }
      } else if (cartData[i].product_id === "PR3") {
        product3Count++;
        if (product3Count === 1) {
          buildCartItem(cartData[i]);
        } else if (product3Count > 1) {
          updateCartQuantity(cartData[i].product_id, product3Count);
        }
      }
    }
  }
  console.log(product1Count, product2Count, product3Count);
}

function buildCartItem(product) {
  const cartItem = document.createElement("div");
  cartItem.innerHTML = `<div class="row border-top border-bottom">
            <div class="row main align-items-center">
            <div class="col">
                <div class="row text-muted">${product.name}</div>
                <div class="row">${product.description}</div>
            </div>
            <div class="col">
                <a href="#">-</a><a href="#" class="border" id=${product.product_id}>1</a
                ><a href="#">+</a>
            </div>
            <div class="col">
                &euro; ${product.price} <span class="close">&#10005;</span>
            </div>
            </div>
            </div>`;
  cartContainer.appendChild(cartItem);
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
// once quantities have been updated, calculate the total price
// adjust the page with the total price

// ---------- END CART PAGE DOM MANIPULATION ------ //
