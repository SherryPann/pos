function Receiption() {}

Receiption.prototype.getReceipt = function(cart) {
  var datetime = new DateTime();
  var receipt = '***<没钱赚商店>收据***\n' +
    '打印时间：' + datetime.getTime() +
    '\n----------------------\n' + this.getCartItemsString(cart.cartItems) +
    '----------------------\n挥泪赠送商品：\n' + this.getPromotionitemsString(cart.cartItems) +
    '----------------------\n' +
    '总计：' + cart.getSumtotal() + '(元)\n' +
    '节省：' + cart.getSavedMoney() + '(元)\n' +
    '**********************';
  return receipt;
};

Receiption.prototype.getCartItemsString = function(cartItems) {
  var cartitemsString = '';
  cartItems.forEach(function(cartItem) {
    cartitemsString +=
      '名称：' + cartItem.getName() +
      '，数量：' + cartItem.count + cartItem.getUnit() +
      '，单价：' + cartItem.getPrice().toFixed(2) + '(元)' +
      '，小计：' + cartItem.getSubtotal().toFixed(2) + '(元)\n';
  });

  return cartitemsString;
}

Receiption.prototype.getPromotionitemsString = function(cartItems) {
  var promotionItemsString = '';

  cartItems.forEach(function(cartItem) {
    var promotionitem = new Promotionitem();
    var promotioncount = promotionitem.getPromotionCount(cartItem.barcode, cartItem.count);
    if (promotioncount > 0) {
      promotionItemsString +=
        '名称：' + cartItem.getName() +
        '，数量：' + promotioncount + cartItem.getUnit() + '\n';
    }
  });
  return promotionItemsString;
};