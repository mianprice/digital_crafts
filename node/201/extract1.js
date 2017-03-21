var request = require('request');
var fs = require('fs');

var url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
var filename = 'output.html';

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

saveWebPage(url, filename, function(err) {
  if (err) throw err;
  console.log("It worked!");
});
