// Problem 1
// Code will print Hello, Thor
// var name = 'Loki';
// function hello(name) {
//   console.log('Hello,', name);
// }
// hello('Thor');

// Problem 2
// Code will print Called hello 2 times
// var counter = 0;
// function hello() {
//   console.log('Hello, world!');
//   counter = counter + 1;
// }
// hello();
// hello();
// console.log('Called hello', counter, 'times.');


// Problem 3
// Code will print 'Global count is NaN' and 'Local count is reset to 0' 3 times
// var counter = 0;
// function updateCounter() {
//   counter += 1;
//   console.log('The global count is', counter);
//   var counter = 0;
//   console.log('The local count is reset to', counter);
// }
// updateCounter();
// updateCounter();
// updateCounter();

// Problem 4
// Line 1 [a,f]
console.log("1",a,f);
var a = 0;
// Line 2 [a,f]
console.log("2",a,f);
function f(c) {
  // Line 3 [a,b,c,f,g]
  console.log("3",a,b,c,f,g);
  var b = 1;
  // Line 4 [a,b,c,f,g]
  console.log("4",a,b,c,f,g);
  function g(d) {
    // Line 5 [a,b,c,d,e,f,g]
    console.log("5",a,b,c,d,e,f,g);
    var e = 4;
    // Line 6 [a,b,c,d,e,f,g]
    console.log("6",a,b,c,d,e,f,g);
    return c + d;
  }
  // Line 7 [a,b,c,f,g]
  console.log("7",a,b,c,f,g);
  return g;
  // Line 8 [a,f]
}
console.log("8",a,f);
// Line 9 [a,f]
console.log("9",a,f);
f(2)(3);
// Line 10 [a,f]
console.log("10",a,f);
