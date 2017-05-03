import React from 'react';

export class Gallery extends React.Component {
  render() {
    let IMAGES = [
      'images/comfy.jpg',
      'images/farted.jpg',
      'images/hate.jpg',
      'images/lolcat_airplane.jpg',
      'images/mocked.jpg',
      'images/monorail.jpg',
    ];
    let currentImage = IMAGES[this.props.gallery];
    return (
      <div className="comp">
      <button onClick={this.props.down_cycle}>
        Previous
      </button>
      <button onClick={this.props.up_cycle}>
        Next
      </button>
        <br/>
          <img alt="" src={currentImage} key={currentImage}/>
        <div>
          {IMAGES.map((imageUrl, idx) =>
            <img  onClick={event => this.props.specific(idx)} key={idx} alt="" src={imageUrl} height="60"/>
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
      if (state === 5) {
        return 0;
      } else {
        return state + 1;
      }
    } else {
      if (state === 0) {
        return 5;
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
