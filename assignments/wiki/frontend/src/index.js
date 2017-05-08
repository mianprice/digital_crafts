import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router';
import './index.css';
// IMPORT COMPONENTS AND REDUCERS

const reducer = Redux.combineReducers({
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

const HomePage = () =>
  <div>
    <h1>WIKI</h1>
  </div>;

const TestPage = () =>
  <div>
    <h1>TEST</h1>
  </div>;

const AppLayout = ({ children }) =>
  <div>
    <div className="nav">
      <div><IndexLink to="/" activeClassName="active" className="base_link">Home</IndexLink></div>
      <div><Link to="/test" activeClassName="active" className="base_link">Test</Link></div>
    </div>
    <div>
      {children}
    </div>
  </div>;

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePage}/>
        <Route path="/test" component={TestPage}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
