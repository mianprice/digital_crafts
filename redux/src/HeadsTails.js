import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './HeadsTails.reducer';

// Add code to create a store

class HeadsTails extends React.Component {
  render() {
    let value = 0.6;
    let coinDisplay;
    if (value) {
      let imageUrl = value > 0.5 ?
        'images/quarter-front.png' :
        'images/quarter-back.png';
      coinDisplay = <img src={imageUrl}/>;
    }
    return (
      <div>
        {coinDisplay}
        <button>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
ReactDOM.render(<HeadsTails/>, document.getElementById('root'));
