var fs = require('fs-promise');
var request = require('request-promise');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

function downloadAllUrls(urls) {
  return Promise.all(urls.map(function(url) {
    return request.get(url);
  })).then(function(htmls) {
    var writeFilePromises = htmls.map(function(html, idx) {
      return fs.writeFile(idx + '.html', html);
    });
    return Promise.all(writeFilePromises);
  });
}

downloadAllUrls(urls).then(function() {
  console.log("Success!");
}).catch(function(err) {
  throw err;
});
