var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function() {
    console.log("First Name: " + this.firstName," | Last Name: " + this.lastName," | Eye Color: " + this.eyeColor," | Hair Color: " + this.hairColor);
  }
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;

mom.showInfo();
daughter.showInfo();
