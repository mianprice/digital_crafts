var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send("Hello World!");
});

app.get('/cats', function(req, res) {
  res.send("Meow");
});

app.get('/dogs', function(req, res) {
  res.send("Woof");
});

app.get('/cats_and_dogs', function(req, res) {
  res.send("Living together");
});

app.listen(3000, function() {
  console.log('ex.js listening on port 3000');
});
