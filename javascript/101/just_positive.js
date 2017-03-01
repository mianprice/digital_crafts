function positiveNumbers(array) {
  var new_arr = [];
  for (var i=0; i<array.length; i++) {
    if (array[i] >= 0) {
      new_arr.push(array[i]);
    }
  }
  return new_arr;
}

console.log(positiveNumbers([1,3,-2,4,-2,-3,-4,6,7]));
