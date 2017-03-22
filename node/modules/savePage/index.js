var saveWebPage = require('./save-web-page');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
