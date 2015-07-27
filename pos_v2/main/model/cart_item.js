
function cart_item(barcode,count){
  this.barcode = barcode ;
  this.count = count;
  this._item = null;

};



cart_item.prototype.getItem = function(){
  var allItems = loadAllItems();
  var _this = this;
  if(this._item){
    return this._item;
  }
  else {
    var item;
    allItems.forEach(function(Item) {
      if (Item.barcode === _this.barcode) {
        item = Item;
      }
    });
    this._item = item;
    return _item;
  }

  };

  cart_item.prototype.getName = function(){
    var item = this.getItem();
    return item.name;
  };

  cart_item.prototype.getUnit = function(){
    var item = this.getItem();
    return item.unit;
  };

  cart_item.prototype.getPrice = function(){
    var item = this.getItem();
    return item.price;
  };

cart_item.prototype.getCount = function(){
  return this.count;
};

cart_item.prototype.getPromotionCount = function(){
  var promotionCount = 0;
  //

  return promotionCount;
}

cart_item.prototype.getSubtotal = function(){
  var subtotal = this._item.price * (this._item.count - this.getpromotionCount()) ;
  return subtotal;
  }
