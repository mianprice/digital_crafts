const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.use(function logger(req,res,next) {
  console.log(`Method: ${req.method} || Path: ${req.path}`);
  next();
});

app.get('/', function(req,res) {
  console.log('Hello from the home page middleware.');
  res.render('home.hbs');
});

app.get('/test', function(req,res) {
  console.log('Hello from the test page middleware.');
  res.render('test.hbs');
});

app.get('/test/1', function(req,res) {
  console.log('Hello from the first test page middleware.');
  res.render('t1.hbs');
});

app.get('/test/2', function(req,res) {
  console.log('Hello from the second test page middleware.');
  res.render('t2.hbs');
});

app.get('/test/3', function(req,res) {
  console.log('Hello from the third test page middleware.');
  res.render('t3.hbs');
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/test', function(req, res) {
  console.log('Hello from the test page post-handling middleware.');
  console.log(`You selected Test #${req.body.num}`);
  res.redirect(`/test/${req.body.num}`);
});

app.listen(8000, function() {
  console.log("The server is running");
});
