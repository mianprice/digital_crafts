function letterHistogram(str) {
  var hist = {};
  for (var i = 0; i < str.length; i++) {
    if (hist[str[i]] !== undefined) {
      hist[str[i]] += 1;
    } else {
      hist[str[i]] = 1;
    }
  }
  return hist;
}

console.log(letterHistogram('bananas'));
