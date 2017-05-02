import reducer from './Gallery.reducer';

it('should initialize to zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(0);
});

it('should go to the next image', () => {
  expect(reducer(0, {type: 'cycle', l: 6, move:'+'})).toEqual(1);
});

it('should wrap around to the first image', () => {
  expect(reducer(5, {type: 'cycle', l: 6, move:'+'})).toEqual(0);
});

it('should go to the previous image', () => {
  expect(reducer(5, {type: 'cycle', l: 6, move:'-'})).toEqual(4);
});

it('should wrap around to the last image', () => {
  expect(reducer(0, {type: 'cycle', l: 6, move:'-'})).toEqual(5);
});

it('should jump to a specified image', () => {
  expect(reducer(4, {type: 'specific',val: 1})).toEqual(1);
});

// Write additional tests for
// 1. going to next image
// 2. make sure it wraps around if goes over
// 3. going to previous image
// 4. make sure it wraps around if goes under
// 5. jumping to a specific image index
