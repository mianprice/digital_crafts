// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
function reducer(state, action) {
  if (action.type === 'flip') {
    return action.val;
  } else if (state === undefined) {
    return 0.6;
  } else {
    return state;
  }
}

export default reducer;
