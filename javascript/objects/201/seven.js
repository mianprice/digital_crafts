function createPerson(name) {
  var person = {
    "name": name,
    "friends": [],
    "greet": function(other) {
      console.log(this.createGreeting(other));
    },
    "addFriend": function(friend) {
      this.friends.push(friend);
    },
    "createGreeting": function(other) {
      return 'Yo ' + other.name + '! from ' + this.name + '.';
    },
    "lazyGreeting": function(other) {
      setTimeout(function() {
        this.greet(other);
      }.bind(this),2000);
    }
  };
  return person;
}

var one = createPerson("Jack");
var two = createPerson("Jill");

one.lazyGreeting(two);
two.greet(one);
