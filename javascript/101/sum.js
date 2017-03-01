function sumNumbers(array) {
  var sum = 0;
  for (var i in array) {
    sum += array[i];
  }
  return sum;
}

console.log(sumNumbers([1,2,3,4,5,6,7,8,9,10]));
