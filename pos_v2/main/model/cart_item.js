function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
};



CartItem.prototype.getItem = function() {

  var allItems = loadAllItems();
  var _this = this;
  if (this._item) {
    return this._item;
  } else {
    var item;
    allItems.forEach(function(Item) {
      if (Item.barcode === _this.barcode) {
        item = Item;
      }
    });
    this._item = item;
    return this._item;
  }

};

CartItem.prototype.getName = function() {
  var item = this.getItem();
  return item.name;

};

CartItem.prototype.getUnit = function() {
  var item = this.getItem();
  return item.unit;
};

CartItem.prototype.getPrice = function() {
  var item = this.getItem();
  //alert(item.name);
  if (item) {
    return item.price;
  }
};

CartItem.prototype.getCount = function() {
  return this.count;
};


CartItem.prototype.getSubtotal = function() {
  var subtotal = 0;
  var promotionitem = new Promotionitem();
  var subtotal = this.getPrice() * (this.count - promotionitem.getPromotionCount(this.barcode, this.count));
  if (subtotal) {
    return subtotal;
  }

}