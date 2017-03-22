var cheerio = require('cheerio');
var request = require('request');

request('https://www.npmjs.com/', function(err, response, body) {
  if (err) throw err;
  var $ = cheerio.load(body);
  var list = [];
  var t = $("h3").children(".type-neutral-1").each(function(index, element) {
    console.log($(element).text());
  });
});
