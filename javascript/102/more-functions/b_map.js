function cube(n) {
  return n * n * n;
}

function map(arr,method) {
  var result = [];
  arr.reduce(function(a,b) {
    result.push(method(b));
  }, 0);
  return result;
}

console.log(map([1,2,3,4,5,6,7],cube));
