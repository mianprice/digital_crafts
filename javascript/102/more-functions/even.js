function even(arr) {
  return arr.filter(function(a) {
    return a % 2 === 0 ? 1 : 0;
  });
}


console.log(even([1,2,3,4,5,6,7,8]));
