const pureCli = require('./pure-cli');

function reducer(state, input) {
  // put your code here
  if (state === null) {
    return {
      stack: []
    };
  } else if (!isNaN(Number(input))) {
    return {
      stack: state.stack.concat([Number(input)])
    };
  } else if (input === '+') {
    let args = state.stack.slice(state.stack.length - 2, state.stack.length);
    let result = args.reduce((b,a) => a + b,0);
    return {
      stack: state.stack.slice(0, state.stack.length - 2).concat([result])
    };
  } else if (input === '-') {
    let args = state.stack.slice(state.stack.length - 2, state.stack.length);
    let result = args.reduce((b,a) => a - b,0);
    return {
      stack: state.stack.slice(0, state.stack.length - 2).concat([result])
    };
  } else if (input === '*') {
    let args = state.stack.slice(state.stack.length - 2, state.stack.length);
    let result = args.reduce((b,a) => a * b,1);
    return {
      stack: state.stack.slice(0, state.stack.length - 2).concat([result])
    };
  } else if (input === '/') {
    let args = state.stack.slice(state.stack.length - 2, state.stack.length);
    let result = args.reduce((b,a) => a / b,1);
    return {
      stack: state.stack.slice(0, state.stack.length - 2).concat([result])
    };
  } else if (input === 'q') {
    return {
      stack: state.stack,
      action: 'end'
    };
  } else {
    return state;
  }
}

module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
