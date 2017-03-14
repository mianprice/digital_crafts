function counter(initial) {
  var count = 0;
  if (initial !== undefined) {
    count = initial;
  }
  return function() {
    count ++;
    console.log(count);
  };
}

var count1 = counter(4);
var count2 = counter();

count1();
count1();
count2();
count2();
count1();
