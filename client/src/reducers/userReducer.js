import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {

    if (action.type === types.LOGIN_SUCCESS) {
        return action.user;
    }

    return state;

}
