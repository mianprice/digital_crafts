function printSquare(x) {
  var s = "";
  for (var i=0; i<x; i++) {
    s += "*";
  }
  for (var j=0; j<x; j++) {
    console.log(s);
  }
}

printSquare(10);
