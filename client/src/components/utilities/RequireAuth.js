import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {toastr} from 'react-redux-toastr';


export default function (ComposedComponent) {

  class Authentication extends Component {

    constructor(props) {
      super(props);

    }

    // componentWillUpdate(nextProps) {
    //   if ( !nextProps.authenticated ) {
    //     this.context.router.history.push("/login");
    //   }
    // }

    componentDidMount() {
      if ( !this.props.authenticated ) {
        toastr.warning("Login Required", "Please log in");

        setTimeout(() => {
          this.context.router.history.push("/login");
        }, 1000);
      }
    }

    render() {
      if ( this.props.authenticated ) {
        return (
          <div>
            <ComposedComponent { ...this.props }/>
          </div>
        );
      } else {
        return (<div>
        </div>);
      }
    }

  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    };
  }

  Authentication.contextTypes = {
    router: PropTypes.object
  };

  return connect(mapStateToProps)(Authentication);

}
