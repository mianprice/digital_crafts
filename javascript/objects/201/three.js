var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;

console.log("First Name: " + daughter.firstName," | Last Name: " + daughter.lastName," | Eye Color: " + daughter.eyeColor," | Hair Color: " + daughter.hairColor);
