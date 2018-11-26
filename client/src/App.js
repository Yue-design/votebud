
// Set up your application entry point here...
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as authActions from './actions/authActions';

import ReduxToastr from 'react-redux-toastr';

import "./styles/styles.css";
import "./styles/foundation.css";
import "./styles/animate.min.css";


import Main from './components/Main';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { loadSites } from "./actions/siteActions";

const store = configureStore();
store.dispatch(loadSites());

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));
if (token) {
    store.dispatch( authActions.loginSuccess(token, user) );
}

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Main />
                    <ReduxToastr
                        timeOut={4000}
                        newestOnTop={false}
                        preventDuplicates
                        position="top-left"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar/>
                </div>

            </Provider>
        );
    }

}

export default App;
