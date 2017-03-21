var async = require('async');
var fs = require('fs');
var gm = require('gm');

function resize(filename, callback) {
  var newFile = filename.replace('.png', '-new.png');
  gm(filename).resize(240,240).noProfile().write(newFile, function(err) {
    if (err) {
      callback(err);
    }
    callback(null);
  });
}

function findFiles(dir, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      callback(err);
      return;
    }
    var filenames = files.filter(function(element) {
      return element.endsWith('.png');
    });
    async.map(filenames, resize, function(err) {
      if (err) throw err;
      callback(null);
    });
  });
}

var dirs = ['./'];

async.map(dirs, findFiles, function(err) {
  if (err) throw err;
  console.log("Files found and changed.");
});
