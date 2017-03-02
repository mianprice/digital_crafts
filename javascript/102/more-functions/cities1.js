var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function lessThan70(arr) {
  return arr.filter(function(item) {
    return item.temperature < 70 ? 1 : 0;
  });
}

console.log(lessThan70(cities));
