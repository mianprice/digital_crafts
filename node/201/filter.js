var async = require('async');
var fs = require('fs');

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt',
  'hello.js',
  'test.js',
  'ex.js',
  'extract1.js'
];

function f(filename, callback) {
  fs.readdir("./", function(err, files) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, files.includes(filename));
  });
}

async.filter(filenames, f, function(err, filelist) {
  if (err) throw err;
  console.log("These files exist in this directory: " + filelist);
});
