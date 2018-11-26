import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.sites, action) {
  switch (action.type) {
    case types.LOAD_SITES_SUCCESS:
      return action.sites;
    case types.CREATE_SITE_SUCCESS:
      return [...state, action.site];
    case types.UPDATE_SITE_SUCCESS:
      return [
        ...state.filter(site => site._id !== action.site._id),
        Object.assign({}, action.site)
      ];
    default:
      return state;
  }



}
