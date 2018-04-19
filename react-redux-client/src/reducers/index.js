// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import itemReducer from './itemReducer.js';


export default combineReducers({
    appState:appReducer,
    itemState:itemReducer,
    routing
    // More reducers if there are
    // can go here
  })