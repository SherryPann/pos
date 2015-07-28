function Cart(cartItems){
  this.cartItems = cartItems || [];
}

Cart.prototype.addCartItem = function (cartItem) {
  var cartitem = this.findCartItem(cartItem.barcode);
  if(cartitem) {
    cartitem.count +=cartItem.count;
  }
  else{ //console.log(cartItem);
    this.cartItems.push(cartItem);
  }
}

Cart.prototype.findCartItem = function(barcode){//数组用for循环遍历
    for(var i = 0; i <  this.cartItems.length; i++) {
    if(this.cartItems[i].barcode === barcode) {
      return this.cartItems[i];
    }
  }
};


Cart.prototype.getSumtotal = function(){
  var sumtotal = 0;
  var cartItem = new cart_item()
  for(var cartitem in this.cartItems) {

      sumtotal += cartItem.getSubtotal(cartitem);
      return sumtotal.toFixed(2);
    }
};

Cart.prototype.getSavedMoney = function(){
  var savedmoney = 0;
    var originalcost = 0;

  this.cartItems.forEach(function(Item){
    var cartitem = new cart_item(Item.barcode,Item.count);
    originalcost += cartitem.getPrice() * Item.count;
  })
  savedmoney = originalcost - this.getSumtotal;
  return savedmoney.toFixed(2);
}
