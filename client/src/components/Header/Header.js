import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = ({loggedIn}) => {
    return (
      <header>
        <div className="title-bar" data-responsive-toggle="main-nav" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="main-nav"></button>
          <div className="title-bar-title">Best Buddhist Websites</div>
        </div>
        <div className="top-bar dark" id="main-nav">
          <div className="top-bar-left hide-for-small-only">
            <ul className="dropdown vertical medium-horizontal menu" data-responsive-menu="drilldown medium-dropdown">
              <li className="menu-text">Best Buddhist Websites</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="dropdown vertical medium-horizontal menu" data-responsive-menu="drilldown medium-dropdown">
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
              <NavLink exact to="/submit" activeClassName="active">Submit</NavLink>

              { !loggedIn && <NavLink exact to="/login" activeClassName="active">Login</NavLink> }
              { !loggedIn && <NavLink exact to="/register" activeClassName="active">Register</NavLink> }

              { loggedIn && <NavLink exact to="/logout" activeClassName="active">Logout</NavLink> }

            </ul>
          </div>
        </div>
      </header>
    );
};

Header.propTypes = {
    //course: PropTypes.object.isRequired
};

export default Header;
