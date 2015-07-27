
function Promotionitem(item,promotionCount){
  this.item = item;
  this.promotionCount = promotionCount || 0 ;
}

Promotionitem.prototype.getPromotionCount = function(barcode,promotionitems){
  for(var i = 0; i < promotionitems.length; i++){
    if(promotionitems[i].item.barcode === barcode){
      return promotionitems[i].promotionCount;
    }
  }
};
