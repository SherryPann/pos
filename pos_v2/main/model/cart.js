function Cart(cartItems) {
  this.cartItems = cartItems || [];
}

Cart.prototype.addCartItem = function(cartItem) {
  var cartitem = this.findCartItem(cartItem.barcode);
  if (cartitem) {
    cartitem.count += cartItem.count;
  } else {
    var cartitem = new CartItem(cartItem.barcode, cartItem.count);
    this.cartItems.push(cartitem);
  }
}

Cart.prototype.findCartItem = function(barcode) {
  for (var i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].barcode === barcode) {
      return this.cartItems[i];
    }
  }
};


Cart.prototype.getSumtotal = function() {
  var sumtotal = 0;

  for (var i = 0; i < this.cartItems.length; i++) {

    sumtotal += this.cartItems[i].getSubtotal();

  };
  return sumtotal.toFixed(2);
}

Cart.prototype.getSavedMoney = function() {
  var savedmoney = 0;
  var originalcost = 0;

  this.cartItems.forEach(function(cartitem) {
    originalcost += cartitem.getPrice() * cartitem.count;
  })
  savedmoney = originalcost - this.getSumtotal();
  return savedmoney.toFixed(2);
}