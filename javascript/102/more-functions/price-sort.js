var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function priceSort(arr) {
  return arr.sort(function(a,b) {
    return a.price > b.price ? 1 : -1;
  });
}

console.log(priceSort(products));
