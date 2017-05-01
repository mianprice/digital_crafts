function reducer(state, action) {
  if (state === undefined) {
    return 0;
  } else if (action.type === 'cycle') {
    if (action.move === '+') {
      if (state === action.l - 1) {
        return 0;
      } else {
        return state + 1;
      }
    } else {
      if (state === 0) {
        return action.l - 1;
      } else {
        return state - 1;
      }
    }
  } else if (action.type === 'specific') {
    return action.val;
  } else {
    return state;
  }
}

export default reducer;
