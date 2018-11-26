// Set up your root reducer here...
import {combineReducers} from 'redux';
import sites from './siteReducer';
import token from './tokenReducer';
import authenticated from './authenticatedReducer';
import user from './userReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
    sites,
    token,
    authenticated,
    user,
    toastr: toastrReducer
});

export default rootReducer;
