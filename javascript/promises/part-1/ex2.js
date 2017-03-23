var fs = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'output.txt';

fs.readFile(filename)
  .then(function(buffer) {
    var content = buffer.toString();
    return fs.writeFile(outputFilename, content.toUpperCase());
  })
  .then(function(buffer) {
    console.log("Content succesfully written to new file");
  })
  .catch(function(err) {
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
  });
