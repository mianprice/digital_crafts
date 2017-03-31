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
  res.render('hello.hbs');
});

// ROUTES
app.get('/cats', function(req, res) {
  res.render('cats.hbs');
});

app.get('/dogs', function(req, res) {
  res.render('dogs.hbs');
});

app.get('/cats_and_dogs', function(req, res) {
  res.render('cats_and_dogs.hbs');
});

// ROUTE PARAMETERS (AND TEMPLATE 1)
app.get('/greet/:name', function(req, res) {
  res.render('greet.hbs', {
    name: req.params.name,
    year: req.query.age !== undefined ? 2017 - req.query.age : req.query.age
  });
});

// QUERY PARAMETERS
app.get('/year', function(req, res) {
  res.render('year.hbs', {
    year: 2017 - req.query.age
  });
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
