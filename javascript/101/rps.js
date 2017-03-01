function rockPaperScissors(s1,s2) {
  if (s1 === s2) {
    return 'draw';
  } else if ((s1 === 'rock' && s2 === 'scissors') || (s1 === 'paper' && s2 === 'rock') || (s1 === 'scissors' && s2 === 'paper')) {
    return 'player 1';
  } else {
    return 'player 2';
  }
}

var o1 = rockPaperScissors('rock', 'scissors');
var o2 = rockPaperScissors('rock', 'paper');
var o3 = rockPaperScissors('paper', 'paper');

console.log(o1);
console.log(o2);
console.log(o3);
