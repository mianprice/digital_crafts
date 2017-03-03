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

function str_join(arr,sep) {
  var count = arr.length;
  arr = arr.map(function(item) {
    if (arr.length !== count) {
      item = sep + item;
    } else {
      count --;
    }
    return item;
  });
  return arr.reduce(function(a,b) {
    return a + b;
  },"");
}

function cipher(text,offset,de) {
  if (!de) {
    offset = -offset;
  }
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  var arr = text.split('');
  var new_arr = arr.map(function(c) {
    var index = (alphabet.indexOf(c) + offset);
    if (index > 25) {
      index = index % 26;
    } else if (index < 0) {
      index = index + 26;
    }
    return alphabet[index];
  });
  result = str_join(new_arr,'');
  return result;
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS',13,true);
var decrypted = cipher(encrypted,13,false);

console.log(encrypted);
console.log(decrypted);
