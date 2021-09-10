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
