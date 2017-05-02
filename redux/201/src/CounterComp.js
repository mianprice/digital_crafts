import React from 'react';

export class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.subtract}>-</button>
        {this.props.count}
        <button onClick={this.props.add}>+</button>
      </div>
    );
  }
}

export function reducer(state, action) {
  if (action.type === 'add') {
    return state + 1;
  } else if (action.type === 'subtract') {
    return state - 1;
  } else if (state === undefined) {
    return 0;
  } else {
    return state;
  }
}
