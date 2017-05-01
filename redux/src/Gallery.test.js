import reducer from './Gallery.reducer';

it('should initialize to zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(0);
});

// Write additional tests for
// 1. going to next image
// 2. make sure it wraps around if goes over
// 3. going to previous image
// 4. make sure it wraps around if goes under
// 5. jumping to a specific image index
