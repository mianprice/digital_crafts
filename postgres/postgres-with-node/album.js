var pgp = require('pg-promise')();
var prompt = require('prompt-promise');
var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'music_db'
});

function addAlbum() {
  var valObject = {};
  var linkObject = {};
  prompt("Album name: ")
    .then(function(val) {
      valObject.name = val;
      return prompt("Album year: ");
    })
    .then(function(val) {
      valObject.year = val;
      return prompt("Artist ID: ");
    })
    .then(function(val) {
      linkObject.artist_id = val;
      return db.one('INSERT INTO album VALUES(default, ${name}, ${year}) returning id', valObject);
    })
    .then(function(data) {
      linkObject.album_id = data.id;
      return db.any('INSERT INTO artist_album VALUES(${artist_id}, ${album_id}, TRUE)', linkObject);
    })
    .then(function(data) {
      console.log("Success!");
      pgp.end();
      return prompt("Want to add another album? (y/n): ");
    })
    .then(function(val) {
      if (val === 'y') {
        prompt.done();
        addAlbum();
      } else {
        console.log("Goodbye");
        prompt.done();
      }
    })
    .catch(function(error) {
      throw error;
    });
}

addAlbum();
