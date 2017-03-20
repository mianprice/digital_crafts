// var x = 4;
// var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;

var x = 4;
var y = 3;

function square(num) {
  return num * num;
}

function sum(x, y, callback) {
  return callback(x) + callback(y);
}

console.log(sum(x,y,square));
