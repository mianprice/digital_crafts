const reducer = require('../counter');

describe('counter', () => {

  it('initializes to 0', () => {
    expect(reducer(null)).toEqual(0);
  });

  it('adds 1', () => {
    expect(reducer(2, '+')).toEqual(3);
  });

  it('subtracts 1', () => {
    expect(reducer(2, '-')).toEqual(1);
  });

  it('multiplies numbers', () => {
    expect(reducer(3, '3')).toEqual(9);
  });

  it('quits', () => {
    expect(reducer(4, 'q')).toEqual('end');
  });

});
