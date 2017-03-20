// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to. For example:

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var request = require('request');

rl.question('Enter URL: ', function(url) {
  rl.question('Save to file: ', function(file) {
    request(url, function(err, res, body) {
      if (err) throw err;
      var str = body.toString();
      fs.writeFile(file, str, function(err) {
        if (err) throw err;
        console.log("Web page at " + url + " has been saved at " + file);
        rl.close();
      });
    });
  });
});
