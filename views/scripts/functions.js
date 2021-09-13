function fetchStoredCart() {
  // check local storage for cart items, fill cart if existing
  if (localStorage.cart) {
    let restoredObjects = localStorage.getItem("cart");
    restoredObjects = JSON.parse(restoredObjects);
    cartData = restoredObjects;
    console.log(cartData);
    // fillCart(restoredObjects)
  }
}
