import reducer from './Counter.reducer';

it('starts at zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(0);
});

it('adds one', () => {
  let action = {
    type: 'add'
  };
  expect(reducer(1, action)).toEqual(2);
});

it('subtracts one', () => {
  let action = {
    type: 'subtract'
  };
  expect(reducer(3, action)).toEqual(2);
});
