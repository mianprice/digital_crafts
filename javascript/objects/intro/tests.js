describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
  });

  it('image URL works for 2-10', function() {
    var card = new Card(2, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/2_of_diamonds.png');
    card = new Card(3, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/3_of_diamonds.png');
    card = new Card(4, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/4_of_diamonds.png');
    card = new Card(5, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/5_of_diamonds.png');
    card = new Card(6, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/6_of_diamonds.png');
    card = new Card(7, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/7_of_diamonds.png');
    card = new Card(8, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/8_of_diamonds.png');
    card = new Card(9, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/9_of_diamonds.png');
    card = new Card(10, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/10_of_diamonds.png');
  });

  it('image URL works for jack, queen, king and ace', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(12, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/queen_of_diamonds.png');
    card = new Card(13, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/king_of_diamonds.png');
    card = new Card(1, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/ace_of_diamonds.png');
  });

  it('image URL works for different suits', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(11, 'clubs');
    expect(card.getImageUrl()).toEqual('images/jack_of_clubs.png');
    card = new Card(11, 'spades');
    expect(card.getImageUrl()).toEqual('images/jack_of_spades.png');
    card = new Card(11, 'hearts');
    expect(card.getImageUrl()).toEqual('images/jack_of_hearts.png');
  });

});

describe('Hand', function () {

  it('should instantiate a Hand with an array of Cards', function() {
    var hand = new Hand();
    expect(hand.cards).toEqual([]);
  });

  it('should have an array of Cards that can be manipulated like a normal array', function() {
    var hand = new Hand();
    var test = [];
    for (var i = 1; i < 14; i++) {
      hand.cards.push(new Card(i, 'diamonds'));
      test.push(new Card(i, 'diamonds'));
    }
    expect(hand.cards).toEqual(test);
  });

  it('should be able to add a Card to the Hand via the addCard() function', function() {
    var hand = new Hand();
    var test = [];
    for (var i = 1; i < 14; i++) {
      hand.addCard(new Card(i, 'diamonds'));
      test.push(new Card(i, 'diamonds'));
    }
    expect(hand.cards).toEqual(test);
  });

  it('should be able to get the total point value for the Hand using the getPoints function', function() {
    var hand = new Hand();
    hand.addCard(new Card(1, 'diamonds'));
    hand.addCard(new Card(11, 'diamonds'));
    hand.addCard(new Card(2, 'diamonds'));
    hand.addCard(new Card(3, 'diamonds'));
    expect(hand.getPoints()).toEqual(16);
  });

});

describe('Deck', function () {

  it('should instantiate a Deck with an array of 52 Cards', function() {
    var deck = new Deck();
    expect(deck.cards.length).toEqual(52);
  });

  it('should return a Card from the Deck when draw() function is used', function() {
    var deck = new Deck();
    expect(deck.draw()).toEqual(jasmine.any(Card));
  });

  it('should remove a Card from Deck when draw() function is used', function() {
    var deck = new Deck();
    var card1 = deck.draw();
    expect(deck.cards.length).toEqual(51);
  });

  it('should return a different Card from Deck when draw() function is used subsequent times', function() {
    var deck = new Deck();
    var card1 = deck.draw();
    var card2 = deck.draw();
    expect(card1).not.toEqual(card2);
  });

  it('should shuffle the order of Cards in Deck when shuffle() function is called', function() {
    var deck = new Deck();
    var copy1 = JSON.parse(JSON.stringify(deck));
    deck.shuffle();
    var copy2 = JSON.parse(JSON.stringify(deck));
    deck.shuffle();
    var copy3 = JSON.parse(JSON.stringify(deck));
    expect(copy1).not.toEqual(copy2);
    expect(copy1).not.toEqual(copy3);
    expect(copy2).not.toEqual(copy3);
  });

  it('should return the number of remaining Cards in Deck when numCardsLeft() function is called', function() {
    var deck = new Deck();
    var l1 = deck.numCardsLeft();
    var card1 = deck.draw();
    var l2 = deck.numCardsLeft();
    var card2 = deck.draw();
    var l3 = deck.numCardsLeft();
    expect(l1).not.toEqual(l2);
    expect(l2).not.toEqual(l3);
  });

});

describe('BlackjackDeck', function () {

  it('should instantiate a BlackjackDeck with an array of Cards with length (52 * n) + 1', function() {
    var n = 1;
    var bjdeck = new BlackjackDeck(n);
    expect(bjdeck.cards.length).toEqual((52 * n) + 1);
    n = 3;
    bjdeck = new BlackjackDeck(n);
    expect(bjdeck.cards.length).toEqual((52 * n) + 1);
    n = 6;
    bjdeck = new BlackjackDeck(n);
    expect(bjdeck.cards.length).toEqual((52 * n) + 1);
  });

  it('should return a Card from the BlackjackDeck when draw() function is used', function() {
    var bjdeck = new BlackjackDeck(1);
    expect(bjdeck.draw()).toEqual(jasmine.any(Card));
  });

  it('should remove a Card from BlackjackDeck when draw() function is used', function() {
    var bjdeck = new BlackjackDeck(1);
    var card1 = bjdeck.draw();
    expect(bjdeck.cards.length).toEqual(52);
  });

  it('should return a different Card from BlackjackDeck when draw() function is used subsequent times', function() {
    var bjdeck = new BlackjackDeck(1);
    var card1 = bjdeck.draw();
    var card2 = bjdeck.draw();
    expect(card1).not.toEqual(card2);
  });

  it('should shuffle the order of Cards in BlackjackDeck when shuffle() function is called', function() {
    var bjdeck = new BlackjackDeck(1);
    var copy1 = JSON.parse(JSON.stringify(bjdeck));
    bjdeck.shuffle();
    var copy2 = JSON.parse(JSON.stringify(bjdeck));
    bjdeck.shuffle();
    var copy3 = JSON.parse(JSON.stringify(bjdeck));
    expect(copy1).not.toEqual(copy2);
    expect(copy1).not.toEqual(copy3);
    expect(copy2).not.toEqual(copy3);
  });

  it('should return the number of remaining Cards in BlackjackDeck when numCardsLeft() function is called', function() {
    var bjdeck = new BlackjackDeck(1);
    var l1 = bjdeck.numCardsLeft();
    var card1 = bjdeck.draw();
    var l2 = bjdeck.numCardsLeft();
    var card2 = bjdeck.draw();
    var l3 = bjdeck.numCardsLeft();
    expect(l1).not.toEqual(l2);
    expect(l2).not.toEqual(l3);
  });

});
