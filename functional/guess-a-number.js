const pureCli = require('./pure-cli');

function reducer(state, input) {
  if (state === null) {
    return {
      number: Math.floor(Math.random()*11),
      guess: null,
      action: null
    };
  } else if (input !== undefined) {
    if (!isNaN(Number(input))) {
      return {
        number: state.number,
        guess: Number(input),
        action: Number(input) === state.number ? 'end' : null
      };
    } else {
      return state;
    }
  }
}

module.exports = reducer;

function display(state) {
  if (state.guess === null) {
    console.log('I am thinking of a number between 1-10. Take a guess.');
  } else if (state.number === state.guess) {
    console.log('You win!');
  } else if (state.number > state.guess) {
    console.log('Too low! Try again.');
  } else if (state.number < state.guess) {
    console.log('Too high! Try again.');
  }
}

if (require.main === module) {
  pureCli(reducer, display);
}
