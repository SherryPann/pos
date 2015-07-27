function Scanner(){}
Scanner.prototype.scan = function(input){
//var cartitem = [];
    var barcode = input.split('-')[0];
    var count = input.split('-')[1] || 1;
    return {
    barcode, count
  };
}
