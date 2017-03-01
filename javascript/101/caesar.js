function cipher(str,offset) {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var new_str = "";
  for (var i=0; i<str.length; i++) {
    if (lower.includes(str[i])) {
      new_str += lower.charAt((lower.indexOf(str[i]) + offset) % 26);
    } else if (upper.includes(str[i])) {
      new_str += upper.charAt((upper.indexOf(str[i]) + offset) % 26);
    } else {
      new_str += str[i];
    }
  }
  return new_str;
}

function decipher(str,offset) {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var new_str = "";
  for (var i=0; i<str.length; i++) {
    if (lower.includes(str[i])) {
      new_str += lower.charAt((lower.indexOf(str[i]) - offset) >= 0 ? (lower.indexOf(str[i]) - offset) : (lower.indexOf(str[i]) - offset + 26));
    } else if (upper.includes(str[i])) {
      new_str += upper.charAt((upper.indexOf(str[i]) - offset) >= 0 ? (upper.indexOf(str[i]) - offset) : (upper.indexOf(str[i]) - offset + 26));
    } else {
      new_str += str[i];
    }
  }
  return new_str;
}

var c = 'Genius without education is like silver in the mine';
console.log(c);
c = cipher(c,13);
console.log(c);
c = decipher(c,13);
console.log(c);
