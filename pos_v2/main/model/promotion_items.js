
function Promotionitem(){
}
Promotionitem.prototype.getPromotionCount = function(barcode,count){
//  console.log(cartitem);
  var promotions = loadPromotions();
  var promotionCount = 0;
  if(promotions[0].type === 'BUY_TWO_GET_ONE_FREE'){
    promotions[0].barcodes.forEach(function(val){
      if(barcode === val){
        promotionCount = Math.floor(count/3);
      }
    });
  }
  //console.log(promotionCount);
  return promotionCount;
  //console.log(promotionCount)
};
