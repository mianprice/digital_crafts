function callnTimes(x,n) {
  if (n === 0) {
    return;
  }
  x();
  callnTimes(x,n-1);
}

function hello() {
  console.log("Hello, world!");
}

callnTimes(hello,1000);
