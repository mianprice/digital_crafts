import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {Counter, reducer as counterReducer} from './CounterComp';
import {HeadsTails, reducer as coinReducer} from './HeadsTailsComp';
import {Gallery, reducer as galleryReducer} from './GalleryComp';
import {DragonGame, reducer as dragonReducer} from './DragonComp';

const reducer = Redux.combineReducers({
  count: counterReducer,
  coin_val: coinReducer,
  gallery: galleryReducer,
  dragon: dragonReducer
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

const GalleryContainer = ReactRedux.connect(
  state => ({gallery: state.gallery}),
  dispatch => ({
    up_cycle: () => dispatch({
      type: 'cycle',
      move: '+'
    }),
    down_cycle: () => dispatch({
      type: 'cycle',
      move: '-'
    }),
    specific: (index) => dispatch({
      type: 'specific',
      val: index
    })
  })
)(Gallery);

const DragonContainer = ReactRedux.connect(
  state => ({current: state.dragon}),
  dispatch => ({
    fight: () => dispatch({
      type: 'fight',
      val: Math.random()
    }),
    flight: () => dispatch({
      type: 'flight',
    }),
    reset: () => dispatch({
      type: 'reset',
    })
  })
)(DragonGame);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <CounterContainer/>
      <CoinContainer/>
      <GalleryContainer/>
      <DragonContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
