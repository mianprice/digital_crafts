require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');

function splice(files) {
  return Promise.all(files.map(function(file) {
    return fs.readFile(file);
  }))
  .then(function(buffers) {
    var linesets = buffers.map(function(b) {
      return b.toString().replace(/\n$/,"").split('\n');
    }).sort(function(a,b) {
      return b.length - a.length;
    });
    content_out = "";
    for (var i = 0; i < linesets[0].length; i++) {
      linesets.forEach(function(set) {
        if (i < set.length) {
          content_out += set[i] + "\n";
        }
      });
    }
    return fs.writeFile('output.txt', content_out);
  });
}

splice(['one.txt', 'two.txt', 'three.txt', 'four.txt', 'five.txt', 'six.txt', 'seven.txt', 'eight.txt', 'nine.txt', 'ten.txt'])
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });
