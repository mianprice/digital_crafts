var fs = require('fs');
var gm = require('gm');
var async = require('async');

function resizeImage(filename, callback) {
  gm(filename)
    .resize(240, 240)
    .write(filename, callback);
}

function createThumbnails(dir, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      callback(err);
      return;
    }
    console.log('before', files);
    files = files.map(function(filename) {
      return dir + '/' + filename;
    });
    console.log('after', files);
    async.each(files, resizeImage, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

module.exports = createThumbnails
