function strMultiply(str,n,original) {
  if (n === 0) {
    return str;
  }
  if (original === undefined) {
    original = str;
  } else {
    str = str + original;
  }
  return strMultiply(str,n-1,original);
}

console.log(strMultiply('abc', 5));
