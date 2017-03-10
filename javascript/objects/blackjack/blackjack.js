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
    this.shuffle();
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
      var place = this.cards.splice(this.getRandomIndex(),1);
      shuffled.push(place[0]);
    }
    this.cards = shuffled;
    console.log("shuffling");
  },
  numCardsLeft : function() {
    return this.cards.length;
  }
};

function BlackjackDeck(num_decks) {
  Hand.call(this);
  var d;
  for (var i = 0; i < num_decks; i++) {
    d = new Deck();
    this.cards = this.cards.concat(d.cards);
    this.shuffle();
  }
  var red = Deck.prototype.getRandomIndex.call(this,(this.cards.length * 0.25),(this.cards.length * 0.75));
  this.cards.splice(red,0,new Card("red","red"));
}

BlackjackDeck.prototype = Object.create(Deck.prototype);


// Variable Declarations
var num_decks = 6;
var currentDeck = new BlackjackDeck(num_decks);
console.log(currentDeck);
var players = [];
players[0] = {
  "name": "player",
  "hand": new Hand()
};
players[1] = {
  "name": "dealer",
  "hand": new Hand()
};
var busted = false;
var stand = false;
var nextDeck = false;


// Helper Functions
function reset() {
  if (nextDeck) {
    currentDeck = new BlackjackDeck(num_decks);
    currentDeck.shuffle();
    console.log(currentDeck);
  }
  $(".hand").empty();
  $("#messages").text("");
  busted = false;
  stand = false;
  nextDeck = false;
  for (var i = 0; i < players.length; i++) {
    players[i].hand = new Hand();
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
  var nextCard = currentDeck.draw();
  if (nextCard.point === "red") {
    nextCard = currentDeck.draw();
    nextDeck = true;
  }
  console.log(nextCard);
  toPlayer.hand.addCard(nextCard);
  console.log(nextCard);
  $("#" + toPlayer.name + "-hand").append("<img src='" + nextCard.getImageUrl() + "'>");
  $("#" + toPlayer.name + "-points").text(toPlayer.hand.getPoints());
  bust(toPlayer);
}
function dealerLogic() {
  setTimeout(function() {
    if (players[1].hand.getPoints() < 17) {
      deal(players[1]);
      dealerLogic();
    } else {
      var difference = players[1].hand.getPoints() - players[0].hand.getPoints();
      if (difference === 0) {
        $("#messages").text("It's a push. Click DEAL to play again.");
      } else if (difference < 0) {
        $("#messages").text("You win! Click DEAL to play again.");
      } else {
        $("#messages").text("You lose! Click DEAL to play again.");
      }
      bust(players[1]);
    }
  },500);
}
function bust(toPlayer) {
  if (toPlayer.hand.getPoints() > 21) {
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
