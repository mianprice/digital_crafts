import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={event => {store.dispatch({type: 'subtract'})}}>-</button>
        {this.props.count}
        <button onClick={event => {store.dispatch({type: 'add'})}}>+</button>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Counter count={store.getState()}/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
