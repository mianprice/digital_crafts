function battleship() {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];

  return {
    fire: function(row, col) {
      if (board[row][col] === 'o') {
        board[row][col] = 'x';
        return 'Hit!';
      } else {
        board[row][col] = '*';
        return 'Miss';
      }
    },
    getBoard: function() {
      var str = "\n";
      board.forEach(function(element) {
        str += "|";
        element.forEach(function(element2) {
          if (element2 === ' ') {
            str += "_";
          } else {
            str += element2;
          }
          str += "|";
        });
        str += "\n";
      });
      return str;
    }
  };
}

var game = battleship();

console.log(game.getBoard());
console.log(game.fire(0, 1));
console.log(game.fire(0, 2));
console.log(game.fire(1, 1));
console.log(game.fire(2, 1));
console.log(game.getBoard());
