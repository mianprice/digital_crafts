function ticTacToe(game) {
  var sets = winSets(game);
  var winner = null;
  sets.forEach(function(set) {
    if (set === "OOO" || set === "XXX") {
      winner = set[0];
    }
  });
  return winner;
}

function winSets(grid) {
  var diagonal = (grid.length % 2 === 1);
  var sets = Array(diagonal ? (grid.length + 1) * 2 : grid.length * 2).fill("");
  for (var i = 0; i < grid.length; i++) {
    if (diagonal) {
      sets[sets.length-1] += grid[i][i];
      sets[sets.length-2] += grid[i][grid.length - 1 - i];
    }
    for (var j = 0; j < grid.length; j++) {
      sets[j] += grid[i][j];
      sets[j + grid.length] += grid[j][i];
    }
  }
  return sets;
}

var grid = [
  ['O', 'X', 'X'],
  ['X', 'O', 'O'],
  ['O', 'X', 'X']
];

console.log(ticTacToe(grid));
