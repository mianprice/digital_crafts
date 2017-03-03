function filter(arr,method) {
  var result = [];
  arr.reduce(function(a,b) {
    if (method(b)) {
      result.push(b);
    }
  }, 0);
  return result;
}

console.log(filter([1, 2, 3], function(n) { return n % 2 === 1; }));
