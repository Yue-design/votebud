import React from 'react';
import PropTypes from 'prop-types';

class Logout extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.logoutSuccess();
    localStorage.setItem('token', "");
  }

  componentDidMount() {
    setTimeout(() => {
      this.context.router.history.push("/");
    }, 1000);
  }

  render() {
    return (
      <div className="callout secondary">
        <h5>You have been logged out.</h5>
      </div>
    );
  }
}

Logout.propTypes = {
  //course: PropTypes.object.isRequired
};

Logout.contextTypes = {
  router: PropTypes.object
};

export default Logout;
