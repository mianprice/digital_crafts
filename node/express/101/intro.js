var express = require('express');

var app = express();

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

// ROUTE PARAMETERS
app.get('/greet/:name', function(req, res) {
  res.send("Hello " + req.params.name);
});

// QUERY PARAMETERS
app.get('/year', function(req, res) {
  res.send("You were born in " + (2017 - req.query.age).toString());
});

// TURN ON SERVER
app.listen(3000, function() {
  console.log('ex.js listening on port 3000');
});
