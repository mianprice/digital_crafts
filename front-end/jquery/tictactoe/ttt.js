var player1 = true;
var winner = '';
var counter = [0,0];
var possible = ["one","two","three","four","five","six","seven","eight","nine"];
var cpuThinking = false;

function indexToID(ind) {
  switch (ind) {
    case 0:
      return "one";
    case 1:
      return "two";
    case 2:
      return "three";
    case 3:
      return "four";
    case 4:
      return "five";
    case 5:
      return "six";
    case 6:
      return "seven";
    case 7:
      return "eight";
    case 8:
      return "nine";
  }
}

function cpuMove() {
  cpuThinking = true;
  var status = $(".status").text();
  $(".status").text("CPU is thinking...");
  setTimeout(function() {
    var changed = false;
    var move = "";
    var ran = true;
    var arr = getGrid();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length === 0) {
        var new_arr = JSON.parse(JSON.stringify(arr));
        new_arr[i] = "X";
        var must = checkWin(new_arr,false);
        if (must) {
          move = indexToID(i);
          ran = false;
          break;
        }
      }
    }
    if (!ran) {
      $("#"+move).text("O");
      if (checkWin(arr,true)) {
        displayWinner();
      }
    } else {
      while (!changed) {
        move = possible[getRandomInt(0,8)];
        var t = $("#"+move).text();
        if (t.length === 0) {
          t = "O";
          changed = true;
        }
        $("#"+move).text(t);
        if (checkWin(arr,true)) {
          displayWinner();
        }
      }
    }
    cpuThinking = false;
    $(".status").text(status);
  },1000);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function reset() {
  player1 = true;
  winner = '';
  $(".winner").toggle();
  $(".cell").empty();
  $(".board").on('click','.cell', function() {
    if (cpuThinking) {
      return;
    }
    var t = $(this).text();
    if (t === "O") {
      return;
    }
    if (t.length === 0) {
      t = "X";
    }
    $(this).text(t);
    var arr = getGrid();
    if (checkWin(arr, true)) {
      displayWinner();
    } else {
      cpuMove();
    }
  });
}

function getGrid() {
  var arr = $(".cell").map(function() {
    return $(this).text();
  });
  return arr;
}

function checkWin(arr, bool) {
  if (
    (arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    winner = arr[4];
  } else if (
    (arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[0] === arr[3] && arr[3] === arr[6])
  ) {
    winner = arr[0];
  } else if (
    (arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[6] === arr[7] && arr[7] === arr[8])
  ) {
    winner = arr[8];
  }
  if (!bool) {

  }
  if (winner.length === 1) {
    if (!bool) {
      winner = "";
    }
    return true;
  }
}

function displayWinner() {
  var winString = winner === 'X' ? "You win!" : "CPU wins!";
  updateCounter(winner);
  var playButton = "<div class='play-again'>Play Again</div>";
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
