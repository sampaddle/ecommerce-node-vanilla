// --------- CART PAGE DOM MANIPULATION ------ //

// get the cart line item div
const cartContainer = document.getElementById("cart");
// append something to it as a test
const cartItem = document.createElement("div");
cartItem.innerHTML = `<div class="row border-top border-bottom">
<div class="row main align-items-center">
  <div class="col-2">
    <img
      class="img-fluid"
      src="https://i.imgur.com/1GrakTl.jpg"
    />
  </div>
  <div class="col">
    <div class="row text-muted">Shirt</div>
    <div class="row">Cotton T-shirt</div>
  </div>
  <div class="col">
    <a href="#">-</a><a href="#" class="border">1</a
    ><a href="#">+</a>
  </div>
  <div class="col">
    &euro; 44.00 <span class="close">&#10005;</span>
  </div>
</div>
</div>`;
cartContainer.appendChild(cartItem);

// loop through the items in the product array
// keep a count of each time you see a certain product
// for product that has a count of 0, build a new line item
// append line item to the Dom
// once finished appending, update the quantities based on the count results
// once quantities have been updated, calculate the total price
// adjust the page with the total price

// ---------- END CART PAGE DOM MANIPULATION ------ //
