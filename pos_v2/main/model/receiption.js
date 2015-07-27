function Receiption(){}

Receipt.prototype.getReceipt = function(cart, promotionitems) {
  var datetime = new date();
  var receipt = '***<没钱赚商店>收据***\n' +
  '打印时间：'+ datetime.prototype.getFormattedDate() +
  '\n----------------------\n' +
   this.getCartItemsString(cart.cartItems, promotionitems) +
  '----------------------\n挥泪赠送商品：\n' +
  this.getPromotionsString(cart.cartItems, promotionitems) +
  '----------------------\n' +
  '总计：' + cart.getSumtotal() + '(元)\n' +
  '节省：' + cart.getSavedMoney() + '(元)\n' +
  '**********************';
  return receipt;
};

Receiption.prototype.getCartItemsString = function(cartItems,promotionitems){
  var cartitemsString = '';
  cartItems.forEach(function(cartItem){
    cartitemsString +=
          '名称：' + cartItem._item.name +'，数量：' + cartItem._item.count + cartItem._item.unit +
          '，单价：' + (cartItem._item.price).toFixed(2) + '(元)，小计：' +
          cart.getsubtotal(cartItem,promotionitems)
          + '(元)\n';
      });
  }
  
Receiption.prototype.getPromotionitemsString = function(cartItems,promotionitems) {
   var promotionitemsString = '';
   cartItems.forEach（function(cartItem){
       pormotionItemsString +=
         '名称：' + cartItem._item.name + '，数量：'+
         promotionitem.getPromotionCount(cartItem.barcode,promotionitems) +
         cartItem._item.unit + '\n';
     });
   return promotionItemsString;
 };
