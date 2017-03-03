function box(x,y,char) {
  var row = strMultiply(char,x);
  return str_join(Array(y).fill(row),"\n");
}

function str_join(arr,sep) {
  var count = arr.length;
  arr = arr.map(function(item) {
    if (arr.length !== count) {
      item = sep + item;
    } else {
      count --;
    }
    return item;
  });
  return arr.reduce(function(a,b) {
    return a + b;
  },"");
}

function strMultiply(str,n,original) {
  if (n === 0) {
    return str;
  }
  if (original === undefined) {
    original = str;
  } else {
    str = str + original;
  }
  return strMultiply(str,n-1,original);
}

var i = box(3,4,"*");
var j = box(4,4,"*");
var k = box(5,5,"*");

console.log(i);
console.log();
console.log(j);
console.log();
console.log(k);
