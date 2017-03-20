// function square(num) {
//   return num * num;
// }
//
// function squareRoot(num) {
//   return Math.sqrt(num);
// }
//
// var x = 4;
// var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;
// var answer = squareRoot(sum);
// console.log('The answer is: ' + answer);

function square(num, callback) {
  setTimeout(function() {
    console.log("1000ms later");
    callback(num * num);
  }, 1000);
}

function sum(x, y, callback) {
  callback(x + y);
}

function squareRoot(num, callback) {
  setTimeout(function() {
    console.log("500ms later");
    callback(Math.sqrt(num));
  }, 500);
}

function printer(x) {
  console.log('The answer is: ' + x);
}

var x = 4;
var y = 3;

square(x, function(x2) {
  square(y, function(y2) {
    sum(x2, y2, function(sum) {
      squareRoot(sum, printer);
    });
  });
});
