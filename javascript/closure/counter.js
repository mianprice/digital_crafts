function counter() {
  var count = 0;
  return function() {
    count ++;
    console.log(count);
  };
}

var count1 = counter();
var count2 = counter();

count1();
count1();
count2();
count2();
count1();
