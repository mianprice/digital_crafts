var request = require('request-promise');
var fs = require('fs-promise');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';

function saveWebPage(url, filename) {
  return request(url)
    .then(function(html) {
      return fs.writeFile(filename, html);
    });
}

saveWebPage(url, filename).then(function() {
  console.log("Success!");
}).catch(function(err) {
  throw err;
});
