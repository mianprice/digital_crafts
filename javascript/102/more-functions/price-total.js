var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function total(arr) {
  return arr.reduce(function(a,b) {
    return a + b.price;
  }, 0);
}

console.log(total(products));
