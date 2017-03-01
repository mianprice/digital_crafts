function multiply(m1,m2) {
  var new_arr = [[0,0],[0,0]];
  var rows = [];
  var columns = [];
  for (var i = 0; i < m1.length; i++) {
    var r1 = [];
    var c1 = [];
    for (var j = 0; j < m1.length; j++) {
      r1.push(m2[j][i]);
      c1.push(m1[i][j]);
    }
    rows.push(r1);
    columns.push(c1);
  }
  for (var x=0; x<rows.length; x++) {
    for (var y=0; y<columns.length; y++) {
      new_arr[x][y] += rows[y][0] * columns[x][0] + rows[y][1] * columns[x][1];
    }
  }
  return new_arr;
}

var a1 = [[2,4],[3,4]];
var a2 = [[5,2],[3,1]];

console.log(multiply(a1,a2));
