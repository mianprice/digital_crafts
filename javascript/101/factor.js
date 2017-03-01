function factors(num) {
  var f = [];
  for (var i=1; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i !== i) {
        f.push(num/i);
      }
      f.push(i);
    }
  }
  f.sort(function(a,b){return a-b;});
  return f;
}

console.log(factors(16));
