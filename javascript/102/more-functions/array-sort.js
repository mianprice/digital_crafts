var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

function sum(a,b) {
  return a + b;
}

arr.sort(function(a,b) {
  var sa = a.reduce(sum,0);
  var sb = b.reduce(sum,0);
  return sa > sb ? 1 : -1;
});

console.log(arr);
