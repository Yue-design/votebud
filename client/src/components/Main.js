import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import RequireAuth from './utilities/RequireAuth';

import Home from './Home';
import LoginContainer from './Login/LoginContainer';
import HeaderContainer from './Header/HeaderContainer';
import SubmitContainer from './Submit/SubmitContainer';
import Register from './Register';
import LogoutContainer from './Logout/LogoutContainer';

const $ = window.$;

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).foundation();
  }

  render() {
    return (
      <Router>
        <div>
          <HeaderContainer/>
          <Route exact path="/" component={Home}/>
          {/*<Route exact path="/chinese-sites" component={Home}/>*/}
          {/*<Route exact path="/english-sites" component={Home}/>*/}
          <Route exact path="/login" component={LoginContainer}/>
          <Route exact path="/submit" component={RequireAuth (SubmitContainer)}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/logout" component={LogoutContainer}/>
        </div>
      </Router>
    );
  }
}

Main.propTypes = {
  //course: PropTypes.object.isRequired
};

export default Main;
