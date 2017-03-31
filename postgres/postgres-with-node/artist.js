var pgp = require('pg-promise')();
var prompt = require('prompt-promise');
var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'music_db'
});

function addArtist() {
  var valObject = {};
  var linkObject = {};
  prompt("Artist name: ")
    .then(function(val) {
      valObject.name = val;
      return db.one('INSERT INTO artist VALUES(default, ${name})', valObject);
    })
    .then(function(data) {
      console.log("Success!");
      pgp.end();
      return prompt("Want to add another artist? (y/n): ");
    })
    .then(function(val) {
      if (val === 'y') {
        prompt.done();
        addArtist();
      } else {
        console.log("Goodbye");
        prompt.done();
      }
    })
    .catch(function(error) {
      throw error;
    });
}

addArtist();
