import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CounterContainer from './counter/Counter';
import counterReducer from './counter/Counter.reducer';
import GalleryContainer from './gallery/Gallery';
import galleryReducer from './gallery/Gallery.reducer';
import DragonGameContainer from './dragon/Dragon';
import dragonGameReducer from './dragon/Dragon.reducer';
import WeatherContainer from './weather/Weather';
import weatherReducer from './weather/Weather.reducer';
import {Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router';
import './index.css';

const reducer = Redux.combineReducers({
  theCount: counterReducer,
  galleryInfo: galleryReducer,
  dragonGame: dragonGameReducer,
  weather: weatherReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

const HomePage = () =>
  <div>
    <h1>React Router Exercises</h1>
  </div>;

const AppLayout = ({ children }) =>
  <div>
    <div className="nav">
      <div><IndexLink to="/" activeClassName="active" className="base_link">Home</IndexLink></div>
      <div><Link to="/counter" activeClassName="active" className="base_link">Counter</Link></div>
      <div><Link to="/dragon" activeClassName="active" className="base_link">Dragon</Link></div>
      <div><Link to="/weather/Atlanta" activeClassName="active" className="base_link">Atlanta Weather</Link></div>
      <div><Link to="/weather/New%20York" activeClassName="active" className="base_link">NYC Weather</Link></div>
      <div><Link to="/weather/Denver" activeClassName="active" className="base_link">Denver Weather</Link></div>
      <div><Link to="/weather/Marietta" activeClassName="active" className="base_link">Home Weather</Link></div>
      <div><Link to="/gallery" activeClassName="active" className="base_link">Gallery</Link></div>
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
        <Route path="/counter" component={CounterContainer}/>
        <Route path="/dragon" component={DragonGameContainer}/>
        <Route path="/gallery" component={GalleryContainer}/>
        <Route path="/weather/:place" component={WeatherContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);




// ReactDOM.render(
//   <ReactRedux.Provider store={store}>
//     <div>
//       <CounterContainer/>
//       <GalleryContainer/>
//       <DragonGameContainer/>
//       <WeatherContainer/>
//     </div>
//   </ReactRedux.Provider>,
//   document.getElementById('root')
// );
