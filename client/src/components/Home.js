import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';

import SiteCardContainer from './SiteCard/SiteCardContainer';


const Home = () => {
  // let siteLang;

  // switch (location.pathname) {
  //   case "/":
  //   case "/english-sites":
  //     siteLang = "english";
  //     break;
  //   case "/chinese-sites":
  //     siteLang = "chinese";
  //     break;
  // }

  return (
    <div>
      {/*<ul className="menu">*/}
        {/*<NavLink exact to="/english-sites" activeClassName="active">English sites</NavLink>*/}
        {/*<NavLink exact to="/chinese-sites" activeClassName="active">中文网站</NavLink>*/}
      {/*</ul>*/}

      <div className="site-list-container">
        <SiteCardContainer />
      </div>

    </div>
  );
};

Home.propTypes = {
  //course: PropTypes.object.isRequired
};

export default Home;
