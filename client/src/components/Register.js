import React from 'react';
import PropTypes from 'prop-types';
import CredsApi from '../api/CredsApi';


import {
  ToastContainer,
  ToastMessage,
} from "react-toastr";

const ToastMessageFactory = React.createFactory(ToastMessage.animation);


class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reg: {
        username: "",
        password: "",
        confirm: ""
      },
      errors: {
        username: "",
        password: "",
        confirm: "",
        server: ""
      }
    };

    this.registerClicked = this.registerClicked.bind(this);
    this.updateRegState = this.updateRegState.bind(this);
    this.showRegistrationSuccessToaster = this.showRegistrationSuccessToaster.bind(this);

  }

  showRegistrationSuccessToaster() {
    this.refs.container.success(`Registration success! Please log in.`, `Success`, {
      closeButton: true,
    });
  }

  updateRegState(e) {
    const reg = Object.assign({}, this.state.reg);

    const field = e.target.name;
    reg[field] = e.target.value;
    this.setState({reg});
  }

  formIsValid() {
    let isValid = true;
    let errors = {};

    if (this.state.reg.username.length < 3) {
      errors.username = "Username has to be at least 3 characters long";
      isValid = false;
    }

    if (this.state.reg.password.length < 1) {
      errors.password = "Password has to be at least 1 characters long";
      isValid = false;

    }

    if (this.state.reg.confirm !== this.state.reg.password) {
      errors.confirm = "Confirm password does not match the password";
      isValid = false;

    }

    this.setState({errors});
    return isValid;

  }

  registerClicked(e) {
    e.preventDefault();

    if (!this.formIsValid()) {
      return;
    }

    CredsApi.register(this.state.reg).then((result) => {

      if (result.success) {
        this.showRegistrationSuccessToaster();
        setTimeout(() => {
          this.context.router.history.push("/login");
        }, 1000);
      } else {
        this.setState({errors: {
          server: result.error
        }});
      }
    });


  }

  render() {
    return (
      <div className="submit-container">
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-top-right"
        />
        <form>
          <div className="row">
            <div className="medium-6 columns">
              <label>Username
                <input type="text" placeholder="" name="username" onChange={this.updateRegState}/>
              </label>
            </div>
          </div>
          <p className="help-text alert" id="passwordHelpText">
            {
              this.state.errors.username && this.state.errors.username
            }
          </p>
          <div className="row">
            <div className="medium-6 columns">
              <label>Password
                <input type="password" placeholder="" name="password" onChange={this.updateRegState}/>
              </label>
            </div>
          </div>
          <p className="help-text alert" id="passwordHelpText">
            {
              this.state.errors.password && this.state.errors.password
            }
          </p>
          <div className="row">
            <div className="medium-6 columns">
              <label>Confirm Password
                <input type="password" placeholder="" name="confirm" onChange={this.updateRegState}/>
              </label>
            </div>
          </div>
          <p className="help-text alert" id="passwordHelpText">
            {
              this.state.errors.confirm && this.state.errors.confirm
            }
          </p>
          <p className="help-text alert" id="passwordHelpText">
            {
              this.state.errors.server && this.state.errors.server
            }
          </p>
          <div className="row">
            <button type="button" className="success button" onClick={this.registerClicked}>Register</button>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  //course: PropTypes.object.isRequired
};


Register.contextTypes = {
  router: PropTypes.object
};

export default Register;
