import reducer from './Dragon.reducer';

it('should initialize', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual({dragon: 20, hero: 10,message:'Fight or Flight?'});
});

it('should allow the hero to "fight" and do damage', () => {
  expect(reducer({dragon: 20, hero: 10,message:'Fight or Flight?'}, {type: 'fight', val:0.2})).toEqual({dragon: 15, hero: 10,message:'Dragon took 5 damage. Fight or Flight?'});
});

it('should allow the hero to "fight" and take damage', () => {
  expect(reducer({dragon: 20, hero: 10,message:'Fight or Flight?'}, {type: 'fight', val:0.8})).toEqual({dragon: 20, hero: 5,message:'Hero took 5 damage. Fight or Flight?'});
});

it('should allow the hero to "flight"', () => {
  expect(reducer({dragon: 20, hero: 10,message:'Fight or Flight?'}, {type: 'flight'})).toEqual({dragon: 20, hero: 12,message:'Hero gained 2 health. Fight or Flight?'});
});

it('should allow the player to win', () => {
  expect(reducer({dragon: 20, hero: 10,message:'Fight or Flight?'}, {type: 'fight', val:0.8})).toEqual({dragon: 20, hero: 10,message:'Fight or Flight?'});
});

it('should allow the player to lose', () => {
  expect(reducer({dragon: 20, hero: 10,message:'Fight or Flight?'}, {type: 'fight', val:0.8})).toEqual({dragon: 20, hero: 10,message:'Fight or Flight?'});
});

it('should allow the player to restart the game', () => {
  expect(reducer({dragon: 5, hero: 0,message:'Fight or Flight?'}, {type: 'reset'})).toEqual({dragon: 20, hero: 10,message:'Fight or Flight?'});
});
