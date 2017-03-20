const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const dns = require('dns');
const fs = require('fs');
const http = require('http');

// http.get({host: '54.70.232.116'}, function(err, resp) {
//   console.log(resp);
//   if (err) throw err;
//   var str = '';
//   resp.on('data', function(chunk) {
//     str += chunk;
//   });
//   // Save the Returned HTML File to the Filename that User Entered
//   console.log(str);
//   // fs.writeFile(filename, str, function(err) {
//   //   if (err) throw err;
//   //   console.log("Done writing file!");
//   // });
// });
// throw "stop execution";
//

// Prompt User for Domain Name
rl.question('What domain do you want to look up?', function(name) {
  console.log("Now looking up " + name);
  rl.pause();
  // Find IP Address for that Domain Name and Display it
  dns.lookup(name, function(err,ip) {
    if (err) throw err;
    console.log(name + "'s IP address is: " + ip);
    // Prompt User for Filename to Save HTML File to
    rl.resume();
    rl.question('What name do you want to give the file?', function(filename) {
      console.log("Now creating file " + filename);
      // Request the HTML File for the Home Page of that Domain Name
      http.get({host: ip, family: 4}, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        var str = '';
        res.on('data', function (chunk) {
          str += chunk.toString();
        });
        res.on('end', function() {
          console.log('hello');
          // Save the Returned HTML File to the Filename that User Entered
          fs.writeFile(filename, str, function(err) {
            if (err) throw err;
            console.log("Done writing file!");
          });
        });
      });
      rl.close();
    });
  });
});
