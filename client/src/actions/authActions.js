import * as types from './actionTypes';
import CredsApi from '../api/CredsApi';

export function loginSuccess(token, user) {
  // console.log(token);
  // console.log(user);
  return { type: types.LOGIN_SUCCESS, token, user };
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS };
}
