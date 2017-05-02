import React from 'react';

export class Gallery extends React.Component {
  cycle(arg) {
    store.dispatch({
      type: 'cycle',
      l: IMAGES.length,
      move: arg
    });
  }
  specific(idx) {
    store.dispatch({
      type: 'specific',
      val: idx
    });
  }
  render() {
    let currentImage = this.props.images[this.props.curr];
    return (
      <div>
        <button onClick={this.props.down_cycle}>
          Previous
        </button>
        <button onClick={this.props.up_cycle}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <img  onClick={this.props.specific(idx)} key={idx} src={imageUrl} height="60"/>
          )}
        </div>
      </div>
    );
  }
}

export function reducer(state, action) {
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
