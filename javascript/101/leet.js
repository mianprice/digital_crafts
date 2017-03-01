function leet(str) {
  var con = {
    "a":"4",
    "e":"3",
    "g":"6",
    "i":"1",
    "o":"0",
    "s":"5",
    "t":"7"
  };
  for (var k in con) {
    str = str.replace(k,con[k]);
    str = str.replace(k.toUpperCase(),con[k]);
  }
  return str;
}

console.log(leet("Hello world, I am using leetspeak"));
