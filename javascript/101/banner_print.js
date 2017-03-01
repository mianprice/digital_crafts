function printBanner(str) {
  var s1 = "";
  var s2 = "";
  for (var i=0; i<str.length+2; i++) {
    s1 += "*";
    if (i===0|i===str.length+1) {
      s2 += "*";
    } else if (i===1) {
      s2 += str;
    }
  }
  console.log(s1);
  console.log(s2);
  console.log(s1);
}

printBanner("Hello from inside the banner!");
