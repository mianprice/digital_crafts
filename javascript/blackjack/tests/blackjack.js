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
  var points = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  var suits = ['spades','hearts','clubs','diamonds'];
  for (var i = 0; i < points.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      arr.push({
        "point":points[i],
        "suit":suits[j]
      });
    }
  }
  return arr;
}
