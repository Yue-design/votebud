import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authenticatedReducer(state = initialState.authenticated, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true;
    case types.LOGOUT_SUCCESS:
      return false;

    default:
      return state;
  }

}
