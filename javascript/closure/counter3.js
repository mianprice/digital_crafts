function counter(initial) {
  var count = 0;
  if (initial !== undefined) {
    count = initial;
  }
  return {
    increment: function() {
      count ++;
      console.log(count);
    },
    decrement: function() {
      count --;
      console.log(count);
    },
  };
}

var count1 = counter(4);
var count2 = counter();

count1.increment();
count1.increment();
count1.increment();
count1.decrement();
count1.decrement();
count2.increment();
count2.increment();
count2.increment();
count2.increment();
count2.decrement();
count2.decrement();
count2.decrement();
count1.increment();
