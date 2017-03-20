// Write a program to prompt the user for two file names, the first file will be the input and the second file will be the output. The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input File: ', function(__in__) {
  rl.question('Output File: ', function(__out__) {
    fs.readFile(__in__, function(err, buffer) {
      if (err) throw err;
      var str = buffer.toString().toUpperCase();
      fs.writeFile(__out__, str, function(err) {
        if (err) throw err;
        console.log("New file written: " + __out__);
        rl.close();
      });
    });
  });
});
