var express = require('express');

var app = express();

app.set('view engine', 'hbs');

var animalsArray = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

// BASIC
app.get('/', function(req, res) {
  res.send("Hello World!");
});

// ROUTES
app.get('/cats', function(req, res) {
  res.send("Meow");
});

app.get('/dogs', function(req, res) {
  res.send("Woof");
});

app.get('/cats_and_dogs', function(req, res) {
  res.send("Living together");
});

// ROUTE PARAMETERS (AND TEMPLATE 1)
app.get('/greet/:name', function(req, res) {
  if (req.query.age !== undefined) {
    res.render('greet.hbs', {
      name: req.params.name,
      year: 2017 - req.query.age
    });
  } else {
    res.send("Hello " + req.params.name);
  }
});

// QUERY PARAMETERS
app.get('/year', function(req, res) {
  res.send("You were born in " + (2017 - req.query.age).toString());
});

// TEMPLATE 2
app.get('/fav_animals', function(req, res) {
  res.render('fav_animals.hbs', {
    animals: animalsArray
  });
});

// TURN ON SERVER
app.listen(3000, function() {
  console.log('ex.js listening on port 3000');
});
