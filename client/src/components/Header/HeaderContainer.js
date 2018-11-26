import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from './Header';

class HeaderContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {};

  }

  render() {
    return (
      <Header loggedIn={this.props.loggedIn}/>
    );
  }
}

HeaderContainer.propTypes = {
  //actions: PropTypes.object.isRequired,
  //courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

  let loggedIn;
  const token = state.token;
  if (token.length > 1) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  return {
    loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
