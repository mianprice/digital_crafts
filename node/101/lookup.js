// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var dns = require('dns');

rl.question('Which site do you want to look up? ', function(hostname) {
  dns.lookup(hostname, function(err, ip) {
    if (err) throw err;
    console.log("The IP Address for " + hostname + " is " + ip);
  });
  rl.close();
});
