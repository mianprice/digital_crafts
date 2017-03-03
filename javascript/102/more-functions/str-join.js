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

console.log(str_join(['Hello', 'and', 'goodbye'], ' '));
