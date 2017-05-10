import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router';
import './index.css';
import PageContainer from './page/Page';
import pageReducer from './page/Page.reducer';
import SignupContainer from './signup/Signup';
import signupReducer from './signup/Signup.reducer';
import LoginContainer from './login/Login';
import loginReducer from './login/Login.reducer';

const reducer = Redux.combineReducers({
  page: pageReducer,
  signup: signupReducer,
  login: loginReducer
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

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div><IndexLink to="/" activeClassName="active" className="base_link">Home</IndexLink></div>
          {!this.props.state.login.token ? (<div><Link to="/login" activeClassName="active" className="base_link">Login</Link></div>) : ""}
          {!this.props.state.login.token ? (<div><Link to="/signup" activeClassName="active" className="base_link">Sign Up</Link></div>) : ""}
          {this.props.state.login.token ? (<div className="base_link">Welcome back, {this.props.state.login.username}</div>) : ""}
          <div><Link to="/page/Main" activeClassName="active" className="base_link">Main</Link></div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const AppLayoutContainer = ReactRedux.connect(
  state => ({state})
)(AppLayout);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayoutContainer}>
        <IndexRoute component={HomePage}/>
        <Route path="/page/:title" component={PageContainer}/>
        <Route path="/signup" component={SignupContainer}/>
        <Route path="/login" component={LoginContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
