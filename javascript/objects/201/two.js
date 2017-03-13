var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker'
};
var superman = {
  name: 'Superman',
  realName: 'Clark Kent'
};

function sayHi() {
  console.log('I am ' + this.name + '!');
}

function revealIdentify() {
  console.log('My real name is ' + this.realName + '.');
}

revealIdentify.apply(spiderman);
revealIdentify.apply(superman);
