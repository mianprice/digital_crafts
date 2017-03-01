function matrix_add(m1,m2) {
  var result = [];
  for (var i=0; i<m1.length; i++) {
    var result2 = [];
    for (var j=0; j<m1[i].length; j++) {
      result2.push(m1[i][j] + m2[i][j]);
    }
    result.push(result2);
  }
  return result;
}

var one = [[1,2],[3,4]];
var two = [[5,6],[7,8]];

console.log(matrix_add(one,two));
