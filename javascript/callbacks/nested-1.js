// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);

function square(num, callback) {
  callback(num * num);
}

square(6, function(x) {
  console.log(x);
});
