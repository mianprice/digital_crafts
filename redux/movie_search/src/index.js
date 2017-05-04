import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {MovieWidgetContainer} from './MovieWidgetContainer';
import {reducer as movieReducer} from './MovieWidget.reducer';
import './index.css';

const reducer = Redux.combineReducers({
	base: movieReducer
});

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), Redux.applyMiddleware(ReduxThunk));

ReactDOM.render(
	<ReactRedux.Provider store={store}>
		<MovieWidgetContainer/>
	</ReactRedux.Provider>,
	document.getElementById('root')
);
