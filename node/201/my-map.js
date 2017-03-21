var fs = require('fs');

var my_async = {
  map: function(set, transform, callback) {
    var newSet = [];
    set.reduce(function(a,b) {
      newSet.push(transform(b, callback));
    },0);
    callback(null, newSet);
  }
};

function fileCreate(filename, callback) {
  fs.writeFile(filename, "Hello world!", function(err) {
    if (err) {
      callback(err);
      return;
    }
    return;
  });
}

var filenames = [
  'my-1.txt',
  'my-2.txt',
  'my-3.txt',
  'my-4.txt',
  'my-5.txt',
  'my-6.txt',
  'my-7.txt',
  'my-8.txt',
  'my-9.txt',
  'my-10.txt'
];

my_async.map(filenames, fileCreate, function(err, files) {
  if (err) throw err;
  console.log("Files successfully created");
});
