function wordHistogram(str) {
  var arr = str.split(" ");
  var hist = {};
  for (var i = 0; i < arr.length; i++) {
    if (hist[arr[i]] !== undefined) {
      hist[arr[i]] += 1;
    } else {
      hist[arr[i]] = 1;
    }
  }
  return hist;
}

console.log(wordHistogram('to be or not to be'));
