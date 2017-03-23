var r = require('request-promise');
var fs = require('fs-promise');
var c = require('cheerio');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

function getGrabWrite(url) {
  return r(url).then(function(body) {
    var page = c.load(body);
    var title = page("head title").text();
    return fs.writeFile(title.replace(" - Wikipedia", "").replace(/ /g, "_").toLowerCase() + ".html", body);
  }).catch(function(err) {
    throw err;
  });
}

Promise.all(urls.map(function(element) {
    return getGrabWrite(element);
  })).then(function(pages) {
    console.log("All files received, parsed, and written locally");
  }).catch(function(err) {
    throw err;
  });
