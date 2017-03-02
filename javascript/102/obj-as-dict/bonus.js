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

function top(n,histogram) {
  var result = Array(n*2);
  for (var word in histogram) {
    for (var i = 0; i < n; i++) {
      if (histogram[word] > result[2*i + 1] || result[2*i + 1] === undefined) {
        if (result[2*i + 1] === undefined) {
          result[2*i] = word;
          result[2*i + 1] = histogram[word];
          break;
        }
        for (var j = n - 1; j > i; j--) {
          result[j*2] = result[(j-1)*2];
          result[j*2 + 1] = result[(j-1)*2 + 1];
        }
        result[2*i] = word;
        result[2*i + 1] = histogram[word];
        break;
      }
    }
  }
  for (var k = 0; k < n; k++) {
    console.log((k+1).toString() + "=> " + result[2*k] + ": " + result[2*k + 1]);
  }
}

top(2,wordHistogram('to be or not to be'));
