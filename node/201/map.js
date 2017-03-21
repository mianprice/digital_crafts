var async = require('async');
var fs = require('fs');

function fileCreate(filename, callback) {
  fs.writeFile(filename, "Hello world!", function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

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
  '10.txt'
];

async.map(filenames, fileCreate, function(err) {
  if (err) throw err;
  console.log("Files successfully created");
});
