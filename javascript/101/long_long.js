function longer(str) {
  var arr = ["aa","ee","ii","oo","uu"];
  for (var i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      str = str.replace(arr[i],arr[i]+arr[i]+arr[i][0]);
    }
  }
  return str;
}

console.log(longer("raccoon"));
