function printReceipt(inputs) {
  var cartlist = '';
  var bill = getbill(inputs);
  bill.forEach(function(val) {
    cartlist +=
      '名称：' + val.name +
      '，数量：' + val.count + val.unit +
      '，单价：' + val.price.toFixed(2) + '(元)' +
      '，小计：' + (val.price * val.count).toFixed(2) + '(元)\n';
  });
  console.log('***<没钱赚商店>收据***\n' +
    cartlist + '----------------------\n' +
    '总计：' + getsumtotal(inputs) + '(元)\n' +
    '**********************');
}
// function getcartlist(items){
//   return items.filter(function(val){
//   })
//
// }
function getbill(cartItems) {

  var bill = [];
  for (var i in cartItems) {
    cartItems[i].count = 0;
    cartItems.forEach(function(cartItem) {
      if (cartItems[i].name === cartItem.name) {
        cartItems[i].count++;
        return;
      }
    });
  }
  return cartItems;
}

function getsumtotal(val) {
  var sumtotal = 0;

  val.forEach(function(item) {
    sumtotal += item.count * item.price;
  });
  return sumtotal.toFixed(2);
}
