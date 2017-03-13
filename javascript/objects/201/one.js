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

spiderman.sayHi = sayHi;
superman.sayHi = sayHi;

spiderman.sayHi();
superman.sayHi();
