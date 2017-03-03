function reduce(arr,combine,initialValue) {
  if (arr.length === 0) {
    return initialValue;
  }
  var n = combine(arr.pop(0),initialValue);
  return reduce(arr,combine,n);
}

console.log(reduce([1, 2, 3], function(value, n) { return value + n; }, 0));
