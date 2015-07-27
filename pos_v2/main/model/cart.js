function Cart(cartItems){
  this.cartItems = cartItems || [];
}

Cart.prototype.addCartItem = function (cartItem) {
  if(this.findCartItem(cartItem.barcode)) {
    for(var cartitem in this.cartItems) {
    if(cartItem.barcode === barcode) {
      cartitem.count +=cartItem.count;
  }
}
}
  else{
    this.cartItems.push(cartItem);
  }
}

Cart.prototype.findCartItem = function(barcode){
    for(var cartitem in this.cartItems) {
    if(cartitem.barcode === barcode) {
      return true;
    }
  }
};


Cart.prototype.getSumtotal = function(){
  var sumtotal = 0;
  for(var cartitem in cartItems) {
      var cartItem = new cart_item();
      sumtotal += cartItem.getsubtotal();
      return sumtotal.toFixed(2);
    }
};

Cart.prototype.getSavedMoney = function(){
  var savedmoney = 0;
    var originalcost = 0;
  this.cartItems.forEach(function(Item){
    originalcost += Item._item.price * Item._item.count;
  })
  savedmoney = originalcost - this.getSumtotal;
  return savedmoney.toFixed(2);
}
