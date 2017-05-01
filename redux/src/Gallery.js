import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Gallery.reducer';

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

let store = Redux.createStore(reducer);

class Gallery extends React.Component {
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
        <button onClick={event => {this.cycle('-')}}>
          Previous
        </button>
        <button onClick={event => {this.cycle('+')}}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <img  onClick={event => {this.specific(idx)}} key={idx} src={imageUrl} height="60"/>
          )}
        </div>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Gallery curr={store.getState()} images={IMAGES}/>,
    document.getElementById('root')
  );
}
display();
store.subscribe(display);
