function positive(arr) {
  return arr.filter(function(a) {
    return a < 0 ? 0 : 1;
  });
}

console.log(positive([1,2,3,-1,-2,-3,-4,4]));
