const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'session_ex1',
  cookie: {
    maxAge: 60000
  }
}));

app.set('view engine', 'hbs');

app.get('/', function(req,res) {
  if (req.session.name) {
    res.redirect('/greet');
  } else {
    res.render('ask.hbs');
  }
});

app.get('/greet', function(req,res) {
  req.session.count += 1;
  res.render('greet.hbs', {
    name: req.session.name,
    n: req.session.count,
    times: req.session.count > 1 ? 'times' : 'time'
  });
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/submit_name', function(req, res) {
  req.session.name = req.body.name;
  req.session.count = 0;
  res.redirect('/greet');
});

app.listen(8000, function() {
  console.log("The server is running");
});
