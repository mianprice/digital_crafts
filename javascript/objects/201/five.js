function Person(name) {
  this.name = name;
  this.friends = [];
  this.greet = function(other) {
    console.log(this.createGreeting(other));
  };
}

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
  return 'Yo ' + other.name + '! from ' + this.name + '.';
};

var one = new Person("Jack");
var two = new Person("Jill");

one.greet(two);
two.greet(one);
