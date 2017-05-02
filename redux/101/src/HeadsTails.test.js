import reducer from './HeadsTails.reducer';

it('initializes', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(0.6);
});

it('produces different values each flip', () => {
  expect(reducer(0.5, {
    type: 'flip',
    val: Math.random()
  })).not.toEqual(reducer(0.5, {
    type: 'flip',
    val: Math.random()
  }));
});
