import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import update from 'react-addons-update';
import * as types from '../constants/actionTypes';

const initialItems = {};

function article(state = initialItems, action = {}) {
  switch (action.type) {
    case types.ARTICLE_REQUEST:
    case types.ARTICLE_ERROR:
      return state;

    case types.ARTICLE_SUCCESS:
      return update(state, { $set: action.data });

    default:
      return state;
  }
}

const reducers = combineReducers({
  article,
  routing: routerReducer,
  // routerReducer,
});

export default reducers;
