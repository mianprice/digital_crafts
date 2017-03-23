require('any-promise/register/bluebird');
var Promise = require('bluebird');
var fs = require('fs-promise');

function splice2(f1, f2, output) {
  return fs.readFile(f1)
  .then(function(buffer1) {
    return [buffer1, fs.readFile(f2)];
  })
  .spread(function(buffer1, buffer2) {
    lines1 = buffer1.toString().replace(/\n$/,"").split('\n');
    lines2 = buffer2.toString().replace(/\n$/,"").split('\n');
    content_out = "";
    for (var i = 0; i < (lines1.length > lines2.length ? lines1.length : lines2.length); i++) {
      content_out += lines1[i] + "\n" + lines2[i] + "\n";
    }
    return fs.writeFile(output, content_out);
  });
}

splice2('one.txt', 'two.txt', 'output.txt')
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });
