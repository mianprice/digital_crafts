import React from 'react';

export class HeadsTails extends React.Component {
  render() {
    let value = this.props.coin_val;
    let coinDisplay;
    if (value) {
      let imageUrl = value > 0.5 ?
        'images/quarter-front.png' :
        'images/quarter-back.png';
      coinDisplay = <img src={imageUrl} alt='coin'/>;
    }
    return (
      <div className="comp">
        {coinDisplay}
        <button onClick={this.props.flip}>
          Flip!
        </button>
      </div>
    );
  }
}

export function reducer(state, action) {
  if (action.type === 'flip') {
    return action.val;
  } else if (state === undefined) {
    return 0.6;
  } else {
    return state;
  }
}
