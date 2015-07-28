
function cart_item(barcode,count){
  this.barcode = barcode ;
  this.count = count;
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
  //  console.log(this._item);
    return this._item;
  }

  };
 //  var allItems = loadAllItems();
 //  console.log( allItems);
 // for(var i = 0; i < allItems.length; i++){
 //
 //   if(allItems[i].barcode === this.barcode){
 //     var item = new allItems[i];
 //     return item;
 //
 //   }
 // }
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


cart_item.prototype.getSubtotal = function(){
  //console.log(cartitem);
  var subtotal = 0;
  //var price = cartitem.getPrice();
  var promotionitem = new Promotionitem();
 var subtotal = this.getPrice * (this.count - promotionitem.getPromotionCount(this.barcode,this.count)) ;
  return subtotal;
//  console.log(subtotal);
}//
