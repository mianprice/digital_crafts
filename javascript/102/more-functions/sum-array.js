function sum(arr) {
  return arr.reduce(function(a,b) {
    return a + b;
  },0);
}

console.log(sum([1,2,3,4,5,6,7,8,9]));
