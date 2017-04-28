const reducer = require('../reverse-polish');
const df = require('deep-freeze');

describe('reverse polish', () => {

  it('initializes a stack', () => {
    expect(reducer(null)).toEqual({
      stack: []
    });
  });

  it('enters a number to the stack', () => {
    expect(reducer(df({
      stack: []
    }), '4')).toEqual({stack: [4]});
  });

  it('adds the top 2 numbers on stack', () => {
    expect(reducer(df({
      stack: [2, 3]
    }), '+')).toEqual({stack: [5]});
  });

  it('subtracts the top 2 numbers on the stack', () => {
    expect(reducer(df({
      stack: [2, 3]
    }), '-')).toEqual({stack: [1]});
  });

  it('multiplies the top 2 numbers on the stack', () => {
    expect(reducer(df({
      stack: [4, 5]
    }), '*')).toEqual({stack: [20]});
  });

  it('divides the top 2 numbers on the stack', () => {
    expect(reducer(df({
      stack: [2, 6]
    }), '/')).toEqual({stack: [3]});
  });

  it('keeps the unused part of the stack intact', () => {
    expect(reducer(df({
      stack: [1, 2, 3, 4, 5]
    }), '+')).toEqual({stack: [1, 2, 3, 9]});
  });

  it('quits the problem when q is entered', () => {
    expect(reducer(df({
      stack: [1, 2, 3]
    }), 'q')).toEqual({stack: [1, 2, 3], action: 'end'});
  });

});
