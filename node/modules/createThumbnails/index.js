var ct = require('./create-thumbnail');

ct('images', function(err) {
  if (err) throw err;
  console.log("it worked");
});
