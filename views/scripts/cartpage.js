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
          buildCartItem(cartData[i], 1);
        } else if (product1Count > 1) {
          updateCartQuantity(cartData[i].product_id, product1Count);
        }
      } else if (cartData[i].product_id === "PR2") {
        product2Count++;
        if (product2Count === 1) {
          buildCartItem(cartData[i], 2);
        } else if (product2Count > 1) {
          updateCartQuantity(cartData[i].product_id, product2Count);
        }
      } else if (cartData[i].product_id === "PR3") {
        product3Count++;
        if (product3Count === 1) {
          buildCartItem(cartData[i], 3);
        } else if (product3Count > 1) {
          updateCartQuantity(cartData[i].product_id, product3Count);
        }
      }
    }
  }
  console.log(product1Count, product2Count, product3Count);
}

function buildCartItem(product, coundID) {
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
    console.log(parseInt(quantity.textContent));
    let productCount = parseInt(quantity.textContent) - 1;
    if (productCount != 0) {
      quantity.innerHTML = productCount;
      console.log(productCount);
      // set the global variable for the product count
      if (coundID == 1) {
        product1Count = productCount;
      }
      if (coundID == 2) {
        product2Count = productCount;
      }
      if (coundID == 3) {
        product3Count = productCount;
      }
    }
  });

  const plus = document.getElementById(`plusQuantity${product.product_id}`);
  plus.addEventListener("click", () => {
    const quantity = document.getElementById(`${product.product_id}`);
    let productCount = parseInt(quantity.textContent) + 1;
    quantity.innerHTML = productCount;
    // set the global variable for the product count
    if (coundID == 1) {
      product1Count = productCount;
    }
    if (coundID == 2) {
      product2Count = productCount;
    }
    if (coundID == 3) {
      product3Count = productCount;
    }
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
// once quantities have been updated, calculate the total price
// adjust the page with the total price

// ---------- END CART PAGE DOM MANIPULATION ------ //
