var request = require('request'),
  gm = require('gm'),
  fs = require('fs');

var options = {
  url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  encoding: null
};

request(options, function(err, res, body) {
  if (err) throw err;
  fs.writeFile('unchanged.png', body, function(err) {
    if (err) throw err;
    gm('unchanged.png').resize(240,240).noProfile().write('resized.png', function(err) {
      if (err) throw err;
      console.log("Done!");
    });
  });
});
