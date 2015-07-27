function Pos(cart,scanner){
  this.cart = cart;
  this.scanner = scanner;
}


Pos.prototype.getRecerption = function(promotionitems){
  var cartitemsString = '';
  var receipt = new Receiption();
  var receiptString = receipt.getReceipt(this.cart, promotionitems);

  return cartitemsString;
}
