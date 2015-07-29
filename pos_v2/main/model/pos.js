function Pos(cart, scanner) {
  this.cart = cart;
  this.scanner = scanner;
}

Pos.prototype.getReceiption = function() {
  var cartitemsString = '';
  var receipt = new Receiption();
  cartitemsString = receipt.getReceipt(this.cart);
  return cartitemsString;
}