var player1 = true;
var winner = '';
var counter = [0,0];

function reset() {
  player1 = true;
  winner = '';
  $(".winner").toggle();
  $(".cell").empty();
  $(".board").on('click','.cell', function() {
    var t = $(this).text();
    if (t.length === 0 && player1) {
      t = "X";
      player1 = false;
    } else if (t.length === 0) {
      t = "O";
      player1 = true;
    }
    $(this).text(t);
    checkWin();
  });
}

function checkWin() {
  var one = $("#one").text();
  var two = $("#two").text();
  var three = $("#three").text();
  var four = $("#four").text();
  var five = $("#five").text();
  var six = $("#six").text();
  var seven = $("#seven").text();
  var eight = $("#eight").text();
  var nine = $("#nine").text();
  if (
    (four === five && five === six) ||
    (two === five && five === eight) ||
    (one === five && five === nine) ||
    (three === five && five === seven)
  ) {
    winner = five;
  } else if (
    (one === two && two === three) ||
    (one === four && four === seven)
  ) {
    winner = one;
  } else if (
    (three === six && six === nine) ||
    (seven === eight && eight === nine)
  ) {
    winner = nine;
  }
  if (winner.length === 1) {
    displayWinner();
  }
}

function displayWinner() {
  var winString = winner === 'X' ? "Player 1 is the winner!" : "Player 2 is the winner!";
  updateCounter(winner);
  var playButton = "<div class='play-again'>Play Again!</div>";
  $(".winner").text(winString);
  $(".winner").append(playButton);
  $(".winner").toggle();
  $(".board").off('click','.cell');
}

function updateCounter(winner) {
  if (winner === 'X') {
    counter[0] += 1;
  } else if (winner === 'O') {
    counter[1] += 1;
  }
  $(".counter .p1").text(counter[0].toString());
  $(".counter .p2").text(counter[1].toString());
}

$(function () {
  reset();
  updateCounter();
  $(".game").on('click','.play-again', function() {
    reset();
  });
});
