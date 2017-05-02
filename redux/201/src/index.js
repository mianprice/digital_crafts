import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {Counter, reducer as counterReducer} from './CounterComp';
import {HeadsTails, reducer as coinReducer} from './HeadsTailsComp';

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

const reducer = Redux.combineReducers({
  count: counterReducer,
  coin_val: coinReducer
});

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const CounterContainer = ReactRedux.connect(
  state => ({count: state.count}),
  dispatch => ({
    add: () => dispatch({
      type: 'add'
    }),
    subtract: () => dispatch({
      type: 'subtract'
    })
  })
)(Counter);

const CoinContainer = ReactRedux.connect(
  state => ({coin_val: state.coin_val}),
  dispatch => ({
    flip: () => dispatch({
      type: 'flip',
      val: Math.random()
    })
  })
)(HeadsTails);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <CounterContainer/>
      <CoinContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
