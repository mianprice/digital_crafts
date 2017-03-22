var _ = require('lodash');
var fs = require('fs');
var async = require('async');
var set = [];

function parseCSV(item, callback) {
  var thisStock = {
    "name": item.replace(".csv","")
  };
  fs.readFile("./stocks/" + item, 'utf8', function(err, data) {
    if (err) {
      callback(err);
    }
    var lines = data.split("\n");
    var keys = lines.shift();
    lines.pop();
    keys = keys.split(",");
    _.forEach(keys, function(key) {
      thisStock[key] = [];
    });
    lines = _.map(lines, function(line) {
      return line.split(",");
    });
    _.forEach(lines, function(line) {
      for (var i = 0; i < keys.length; i++) {
        thisStock[keys[i]].push(parseFloat(line[i]));
      }
    });
    set.push(thisStock);
    callback(null);
  });
}

function dataStuff() {
  _.forEach(set, function(stock) {
    var n = _.capitalize(stock.name);
    console.log("+++++++++++++++\n===============\n+++++++++++++++");
    console.log("Stock: " + n);
    var max = {};
    var min = {};
    var mean = {};
    var printers = [];
    _.forEach(['Open', 'High', 'Low', 'Close', 'Volume', 'Adj Close'], function(key) {
      max[key] = _.max(stock[key]);
      min[key] = _.min(stock[key]);
      mean[key] = _.mean(stock[key]);
      printers.push(_.capitalize(key) + "\nMax => " + max[key] + "\nMin => " + min[key] + "\nAverage => " + mean[key] + "\n");
    });
    // print max, min, and mean for each key
    _.forEach(printers, function(p) {
      console.log(p);
    });
  });
}

fs.readdir("./stocks/", function(err, files) {
  if (err) throw err;
  async.each(files, parseCSV, function(err) {
    if (err) throw err;
    set = _.shuffle(set);
    dataStuff();
  });
});
