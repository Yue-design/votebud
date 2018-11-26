import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';

import Logout from './Logout';

class LogoutContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <Logout logoutSuccess={this.props.actions.logoutSuccess}/>
    );
  }
}

LogoutContainer.propTypes = {
  //actions: PropTypes.object.isRequired,
  //courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    //courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
