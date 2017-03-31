var express = require('express');
var path = require('path');
var pgp = require('pg-promise')();

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/music', function(req, res) {
  var db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'music_db'
  });
  db.any('select distinct on(sub."TrackID") sub."Song", sub."Length", sub."Artist", sub."Album", sub."Year" from (select track.name as "Song", track.duration as "Length", artist.name as "Artist", album.name as "Album", album.year as "Year", track.id as "TrackID" from artist inner join artist_album on artist.id=artist_album.artist_id inner join album on artist_album.album_id=album.id inner join track on album.id=track.album_id order by artist.name, album.name, track.name)sub')
    .then(function(data) {
      var keys = Object.keys(data[0]);
      var result = [];
      data.forEach(function(element) {
        var arr = [];
        keys.forEach(function(k) {
          if (k === "Length") {
            var m = (element[k] % 60).toString();
            if (element[k] % 60 < 10) {
              m = "0" + m;
            }
            var h = ((element[k] - (element[k] % 60)) / 60).toString();
            arr.push(h + ":" + m);
          } else {
            arr.push(element[k]);
          }
        });
        result.push(arr);
      });
      res.render('music.hbs', {
        keys: keys,
        lines: result
      });
      db.end();
    })
    .catch(function(error) {
      throw error;
    });
});

// TURN ON SERVER
app.listen(3000, function() {
  console.log('ex.js listening on port 3000');
});
