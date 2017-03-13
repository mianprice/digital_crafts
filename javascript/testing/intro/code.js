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
