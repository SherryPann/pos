function printReceipt(inputs) {
  var bill = '';
  var cartlist = [];

  inputs.forEach(function(cartItem) {
    getcartlist(cartItem, cartlist);
  })
  cartlist.forEach(function(val) {
    bill += '名称：' + val.name +
      '，数量：' + val.count + val.unit +
      '，单价：' + val.price.toFixed(2) + '(元)' +
      '，小计：' + (val.price * val.count).toFixed(2) + '(元)\n';
  });
  console.log('***<没钱赚商店>收据***\n' + bill + '----------------------\n' +
    '总计：' + getsumtotal(cartlist) + '(元)\n' + '**********************');
}

function getcartlist(cartItem, cartlist) {
  for (var i in cartlist) {
    if (cartItem.barcode === cartlist[i].barcode) {
      cartlist[i].count++;
      return;
    }
  };
  cartlist.push({
    barcode: cartItem.barcode,
    name: cartItem.name,
    count: 1,
    unit: cartItem.unit,
    price: cartItem.price
  })
  return cartlist;
}

function getsumtotal(val) {
  var sumtotal = 0;

  val.forEach(function(item) {
    sumtotal += item.count * item.price;
  });
  return sumtotal.toFixed(2);
}