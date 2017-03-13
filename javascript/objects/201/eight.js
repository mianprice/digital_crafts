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
    },
    "createGreetingsForFriends": function() {
      return this.friends.map(function(a) {
        return this.createGreeting(a);
      }.bind(this));
    }
  };
  return person;
}

var one = createPerson("Jack");
var two = createPerson("Jill");
var three = createPerson("John");
var four = createPerson("Joe");

var people = [one,two,three,four];
var others;
people.forEach(function(element) {
  others = JSON.parse(JSON.stringify(people));
  others.splice(people.indexOf(element),1);
  others.forEach(function(other_element) {
    element.addFriend(other_element);
  });
  var strs = element.createGreetingsForFriends();
  strs.forEach(function(other_element) {
    console.log(other_element);
  });
  console.log();
});
