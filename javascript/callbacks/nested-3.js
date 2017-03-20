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
  callback(num * num);
}

function sum(x, y, callback) {
  callback(x + y);
}

function squareRoot(num, callback) {
  callback(Math.sqrt(num));
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
