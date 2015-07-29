//TODO: Please write code in this file.
function printReceipt(inputs) {
  var bill = '';
  var cartlist = [];
  var cart = [];
  cartlist = getsameitems(inputs);

  cartlist.forEach(function(cartItem) {
    getcartlist(cartItem, cart);
  })
  getpromotions(cart);
  console.log(
    '***<没钱赚商店>收据***\n' + '打印时间：' + getdateTime() + '\n' +
    '----------------------\n' + getCartItems(cart) + '----------------------\n' +
    '挥泪赠送商品：\n' + getFreeItems(cart) + '----------------------\n' +
    '总计：' + (getsumtotal(cart) - getsavemoney(cart)).toFixed(2) + '(元)\n' +
    '节省：' + getsavemoney(cart) + '(元)\n' + '**********************');
}

function getdateTime() {
  var currentDate = new Date();
  var year = (currentDate.getFullYear());
  var month = (currentDate.getMonth() + 1);
  var date = (currentDate.getDate());
  var hour = (currentDate.getHours());
  var minute = (currentDate.getMinutes());
  var second = (currentDate.getSeconds());
  var formattedDateString = year + '年' + (month < 10 ? "0" : "") + month + '月' + (date < 10 ? "0" : "") + date + '日 ' + (hour < 10 ? "0" : "") + hour + ':' + (minute < 10 ? "0" : "") + minute + ':' + (second < 10 ? "0" : "") + second;
  return formattedDateString;
}


function getCartItems(Items) {
  var cartItems = '';

  Items.forEach(function(Item) {
    cartItems +=
      '名称：' + Item.name +
      '，数量：' + Item.count + Item.unit +
      '，单价：' + (Item.price).toFixed(2) +
      '(元)，小计：' + (getsubtotal(Item) - (Item.freeCount * Item.price)).toFixed(2) + '(元)\n';
  });
  return cartItems;
}

function getsameitems(inputs) {
  var allItems = [];
  var items = [];
  allItems = loadAllItems();

  inputs.forEach(function(item) {
    for (var i = 0; i < allItems.length; i++) {
      if (item === allItems[i].barcode || item.split('-')[0] === allItems[i].barcode)
        items.push({
          barcode: item,
          name: allItems[i].name,
          price: allItems[i].price,
          unit: allItems[i].unit,
          count: parseInt(item.split("-")[1] || 1)
        });
    }
    return items;
  })
  return items;
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
    count: parseInt(cartItem.barcode.split("-")[1] || 1),
    unit: cartItem.unit,
    price: cartItem.price
  })
  return cartlist;
}


function getpromotions(cart) {
  var promotions = [];
  promotions = loadPromotions();

  promotions.forEach(function(promotion) {
    if (promotion.type === 'BUY_TWO_GET_ONE_FREE') {
      cart.forEach(function(Item) {
        Item.freeCount = (promotion.barcodes.indexOf(Item.barcode) != -1) ?
          Math.floor(Item.count / 3) : 0;
      });
    }
  });
}

function getFreeItems(cart) {
  var freeitems = '';

  cart.forEach(function(Item) {
    if (Item.freeCount) {
      freeitems +=
        '名称：' + Item.name +
        '，数量：'　 + Item.freeCount + Item.unit + '\n';
    }
  });

  return freeitems;
}

function getsavemoney(cart) {
  var savedMoney = 0;

  cart.forEach(function(Item) {
    savedMoney += Item.freeCount * Item.price;
  });
  return savedMoney.toFixed(2);
}

function getsubtotal(Item) {
  return (Item.count * Item.price).toFixed(2);
}

function getsumtotal(cart) {
  var sumtotal = 0;

  cart.forEach(function(Item) {
    sumtotal += Item.count * Item.price;
  });
  return sumtotal.toFixed(2);
} //TODO: Please write code in this file.
