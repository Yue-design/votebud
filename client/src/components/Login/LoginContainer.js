import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from './Login';
import * as authActions from '../../actions/authActions';

class LoginContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <Login loginSuccess={this.props.actions.loginSuccess}/>
    );
  }
}

LoginContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
