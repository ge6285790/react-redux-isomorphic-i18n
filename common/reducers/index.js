import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import update from 'immutability-helper';
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

function youtube(state = { searchBarSize: 30 }, action = {}) {
  switch (action.type) {
    case types.YOUTUBE_SEARCH_INIT_REQUEST:
      return state;
    case types.YOUTUBE_SEARCH_INIT_SUCCESS:
      return update(state, {
        youtubeList: { $set: action.data },
      });
    case types.YOUTUBE_SEARCH_INIT_ERROR:
      return update(state, {
        youtubeList: { $set: action.data },
      });
    case types.YOUTUBE_SEARCH_INIT:
      return update(state, {
        youtubeList: { $set: action.data },
      });
    case types.YOUTUBE_SEARCH_BAR_SIZE_CHANGE:
      return update(state, {
        searchBarSize: { $set: action.data },
      });
    default:
      return state;
  }
}

const reducers = combineReducers({
  article,
  youtube,
});

export default reducers;
