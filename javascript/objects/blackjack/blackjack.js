// Key objects
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function() {
  var point;
  if (this.point === 1) {
    point = "ace";
  } else if (this.point > 10) {
    if (this.point > 12) {
      point = "king";
    } else {
      point = this.point > 11 ? "queen" : "jack";
    }
  } else {
    point = this.point;
  }
  return "images/" + point + "_of_" + this.suit + ".png";
};

function Hand() {
  this.cards = [];
}

Hand.prototype = {
  addCard: function(card) {
    this.cards.push(card);
  },
  getPoints: function() {
    this.cards.sort(function(a,b) {
      return b.point - a.point;
    });
    return this.cards.reduce(function(a,b) {
      if (b.point !== 1) {
        return b.point <= 10 ? a + b.point : a + 10;
      } else {
        return a > 10 ? a + 1 : a + 11;
      }
    },0);
  }
};

function Deck() {
  Hand.call(this);
  for (var i = 1; i < 14; i++) {
    Hand.prototype.addCard.call(this,new Card(i, "spades"));
    Hand.prototype.addCard.call(this,new Card(i, "hearts"));
    Hand.prototype.addCard.call(this,new Card(i, "diamonds"));
    Hand.prototype.addCard.call(this,new Card(i, "clubs"));
  }
}

Deck.prototype = {
  draw : function() {
    return this.cards.shift();
  },
  getRandomIndex : function(min,max) {
    if (min !== undefined && max !== undefined) {
      return Math.floor((Math.random() * (max - min)) + min);
    } else {
      return Math.floor(Math.random() * (this.cards.length - 1));
    }
  },
  shuffle : function() {
    var shuffled = [];
    while (this.cards.length > 0) {
      shuffled.push(this.cards.splice(this.getRandomIndex(),1));
    }
    this.cards = shuffled;
  },
  numCardsLeft : function() {
    return this.cards.length;
  }
};

function BlackjackDeck(num_decks) {
  Hand.call(this);
  var d = new Deck();
  for (var i = 0; i < num_decks; i++) {
    this.cards = this.cards.concat(d.cards);
  }
  var red = Deck.prototype.getRandomIndex.call(this,(this.cards.length * 0.25),(this.cards.length * 0.75));
  this.cards.splice(red,0,new Card("red","red"));
}

BlackjackDeck.prototype = {
  draw : function() {
    return Deck.prototype.draw.call(this);
  },
  getRandomIndex : function(min,max) {
    return Deck.prototype.getRandomIndex.call(this,min,max);
  },
  shuffle : function() {
    Deck.prototype.shuffle.call(this);
  },
  numCardsLeft : function() {
    return Deck.prototype.numCardsLeft.call(this);
  }
};


// Variable Declarations
var num_decks = 6;
var currentDeck = newDeck();
var players = [];
players[0] = {
  "name": "player",
  "hand": []
};
players[1] = {
  "name": "dealer",
  "hand": []
};
var busted = false;
var stand = false;
var nextDeck = false;


// Helper Functions
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getCardImageUrl(obj) {
  if (obj.point > 10) {
    if (obj.point === 11) {
      name = "jack";
    } else {
      name = obj.point === 12 ? "queen" : "king";
    }
  } else {
    name = obj.point === 1 ? "ace" : obj.point;
  }
  suit = obj.suit;
  return "images/" + name + "_of_" + suit + ".png";
}
function calculatePoints(cards) {
  cards.sort(function(a,b) {
    return b.point - a.point;
  });
  var points = cards.reduce(function(a,b) {
    if (b.point >= 10) {
      return a + 10;
    } else if (b.point === 1) {
      return a + 11 > 21 ? a + 1 : a + 11;
    } else {
      return a + b.point;
    }
  },0);
  return points;
}
function newDeck() {
  var arr = [];
  var suits = ['spades','hearts','clubs','diamonds'];
  for (var d = 0; d < num_decks; d++) {
    for (var i = 1; i < 14; i++) {
      for (var j = 0; j < suits.length; j++) {
        arr.push({
          "point":i,
          "suit":suits[j]
        });
      }
    }
  }
  arr = shuffle(arr);
  //insert redcard
  var red = getRandomInt(arr.length/4,(3*arr.length)/4);
  arr.splice(red,0,{point:"stop",suit:"stop"});
  return arr;
}
function reset() {
  if (nextDeck) {
    currentDeck = newDeck();
  }
  $(".hand").empty();
  $("#messages").text("");
  busted = false;
  stand = false;
  nextDeck = false;
  for (var i = 0; i < players.length; i++) {
    players[i].hand = [];
  }
}
function initialDeal() {
  reset();
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < players.length; j++) {
      deal(players[j]);
    }
  }
}
function deal(toPlayer) {
  var nextCard = currentDeck.shift();
  if (nextCard.point === "stop") {
    nextCard = currentDeck.shift();
    nextDeck = true;
  }
  toPlayer.hand.push(nextCard);
  $("#" + toPlayer.name + "-hand").append("<img src='" + getCardImageUrl(nextCard) + "'>");
  toPlayer.points = calculatePoints(toPlayer.hand);
  $("#" + toPlayer.name + "-points").text(toPlayer.points);
  bust(toPlayer);
}

function shuffle(unshuffled) {
  for (var i = 0; i < 1000; i++) {
    var randomIdx1 = getRandomInt(0, unshuffled.length - 1);
    var randomIdx2 = getRandomInt(0, unshuffled.length - 1);
    var card1 = unshuffled[randomIdx1];
    var card2 = unshuffled[randomIdx2];
    unshuffled[randomIdx1] = card2;
    unshuffled[randomIdx2] = card1;
  }
  return unshuffled;
}
function dealerLogic() {
  setTimeout(function() {
    if (players[1].points < 17) {
      deal(players[1]);
      dealerLogic();
    } else {
      var difference = players[1].points - players[0].points;
      if (difference === 0) {
        $("#messages").text("It's a push. Click DEAL to play again.");
      } else if (difference < 0) {
        $("#messages").text("You win! Click DEAL to play again.");
      } else {
        $("#messages").text("You lose! Click DEAL to play again.");
      }
    }
  },500);
}
function bust(toPlayer) {
  if (toPlayer.points > 21) {
    busted = true;
    if (toPlayer.name === "player") {
      $("#messages").text("You busted! Dealer wins. Click DEAL to play again.");
    } else {
      $("#messages").text("Dealer busted. You win! Click DEAL to play again.");
    }
  }
}


// jQuery document.ready
$(document).ready(function() {
$("#deal-button").click(function() {
    initialDeal();
  });
  $("#hit-button").click(function() {
    if (!busted && !stand) {
      deal(players[0]);
    }
  });
  $("#stand-button").click(function() {
    stand = true;
    dealerLogic();
  });
  $("#option-button").click(function() {
    $("#options").toggle();
  });
  $("input").click(function() {
    num_decks = $(this).val();
  });
});
