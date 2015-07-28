function Receiption(){}

Receiption.prototype.getReceipt = function(cart) {
  var datetime = new DateTime ();
  var receipt = '***<没钱赚商店>收据***\n' +
  '打印时间：'+ datetime.getTime() +
  '\n----------------------\n' +
   this.getCartItemsString(cart.cartItems) +
  '----------------------\n挥泪赠送商品：\n' +
  this.getPromotionitemsString(cart.cartItems) +
  '----------------------\n' +
  '总计：' + cart.getSumtotal() + '(元)\n' +
  '节省：' + cart.getSavedMoney() + '(元)\n' +
  '**********************';
  return receipt;
};

Receiption.prototype.getCartItemsString = function(cartItems){
  var cartitemsString = '';
  cartItems.forEach(function(cartItem){
    var cartitem = new cart_item(cartItem.barcode,cartItem.count);
    //console.log(cartitem);
    cartitemsString +=
          '名称：' + cartitem.getName() +'，数量：' + cartitem.count +
          '，单价：' +cartitem.getPrice().toFixed(2) + '(元)，小计：' +
          cartitem.getSubtotal()
          + '(元)\n';
      });
      //console.log(cartitemsString);
      return cartitemsString;
  }

Receiption.prototype.getPromotionitemsString = function(cartItems) {
   var promotionItemsString = '';
   var promotionitem = new Promotionitem();
   cartItems.forEach(function(cartItem){
     var promotioncount = promotionitem.getPromotionCount(cartItem);
     if(promotioncount > 0){
   var cartitem = new cart_item(cartItem.barcode,cartItem.count);
       promotionItemsString +=
         '名称：' + cartitem.getName() + '，数量：'+
         promotioncount +
         cartitem.getUnit() + '\n';
       }
     });
   return promotionItemsString;
 };
