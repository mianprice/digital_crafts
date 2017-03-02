function square(arr) {
  return arr.map(function(n) {
    return Math.pow(n,2);
  });
}

console.log(square([1,2,3,4,5,6,7,8,9,10]));
