function printBox(width,height) {
  var s1 = "";
  var s2 = "";
  for (var i=0; i<width; i++) {
    s1 += "*";
    if (i===0|i===width-1) {
      s2 += "*";
    } else {
      s2 += " ";
    }
  }
  for (var j=0; j<height; j++) {
    if (j===0|j===height-1) {
      console.log(s1);
    } else {
      console.log(s2);
    }
  }
}

printBox(6,4);
