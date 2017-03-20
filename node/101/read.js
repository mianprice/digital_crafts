// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.


var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which file do you want to see? ', function(file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    var str = data.toString();
    console.log(str.toUpperCase());
  });
  rl.close();
});
