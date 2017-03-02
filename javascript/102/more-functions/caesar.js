// function cipher(text) {
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//   var result = '';
//   for (var i = 0; i < text.length; i++) {
//     var chr = text[i];
//     var idx = alphabet.indexOf(chr.toUpperCase());
//     var newIdx = idx + 13;
//     if (newIdx >= alphabet.length) {
//       newIdx -= 26;
//     }
//     result += alphabet[newIdx];
//   }
//   return result;
// }

function cipher(text,offset) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  var arr = text.split('');
  var new_arr = arr.map(function(c) {
    return alphabet[(alphabet.indexOf(c) + offset) % 26];
  });
  result = new_arr.join('');
  return result;
}

function decipher(text,offset) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  var arr = text.split('');
  var new_arr = arr.map(function(c) {
    return alphabet[(alphabet.indexOf(c) - offset) >= 0 ? (alphabet.indexOf(c) - offset) : (alphabet.indexOf(c) - offset) + 26];
  });
  result = new_arr.join('');
  return result;
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS',13);
var decrypted = decipher(encrypted,13);

console.log(encrypted);
console.log(decrypted);
