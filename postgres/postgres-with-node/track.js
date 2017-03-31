var pgp = require('pg-promise')();
var prompt = require('prompt-promise');
var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'music_db'
});

function addTrack() {
  var valObject = {};
  prompt("Track name: ")
    .then(function(val) {
      valObject.name = val;
      return prompt("Track Duration (MM:SS): ");
    })
    .then(function(val) {
      var dur = val.split(":");
      dur = dur.map(function(element) {
        return parseInt(element);
      });
      valObject.duration = ((dur[0] * 60) + dur[1]);
      return prompt("Album ID: ");
    })
    .then(function(val) {
      valObject.album_id = val;
      return db.one('INSERT INTO track VALUES(default, ${name}, ${duration}, ${album_id}) returning id', valObject);
    })
    .then(function(data) {
      console.log("Success!");
      pgp.end();
      return prompt("Want to add another track? (y/n): ");
    })
    .then(function(val) {
      if (val === 'y') {
        prompt.done();
        addTrack();
      } else {
        console.log("Goodbye");
        prompt.done();
      }
    })
    .catch(function(error) {
      throw error;
    });
}

addTrack();
