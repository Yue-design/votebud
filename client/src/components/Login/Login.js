import React from 'react';
import PropTypes from 'prop-types';
import CredsApi from '../../api/CredsApi';
import {toastr} from 'react-redux-toastr'

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      creds: {
        username: "",
        password: ""
      },
      error: ""
    };

    this.loginClicked = this.loginClicked.bind(this);
    this.updateCredsState = this.updateCredsState.bind(this);

  }


  formIsValid() {
    let formIsValid = true;
    let error;

    if (this.state.creds.username.length == 0 || this.state.creds.password.length == 0) {
      formIsValid = false;
      error = "Username or password cannot be empty.";
    }

    this.setState({error});
    return formIsValid;
  }

  loginClicked(e) {
    e.preventDefault();

    if (!this.formIsValid()) {
      return;
    }

    CredsApi.login(this.state.creds).then((result) => {
      if (result.success) {
        console.log(result);
        toastr.success('Success', 'You are logged in!', { timeOut: 500 });
        this.props.loginSuccess(result.data.token, result.data.user);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        setTimeout(() => {
          this.context.router.history.push("/");
        }, 500);
      } else {
        this.setState({error: "Error login. Please check username or password"});
      }
    });

  }


  updateCredsState(e) {
    let creds = this.state.creds;

    const field = e.target.name;
    creds[field] = e.target.value;
    return this.setState({creds});
  }

  render() {
    return (
      <div className="submit-container">
        <form>
          <div className="row">
            <div className="medium-6 columns">
              <label>Username
                <input type="text" placeholder="" name="username" onChange={this.updateCredsState}/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="medium-6 columns">
              <label>Password
                <input type="password" placeholder="" name="password" onChange={this.updateCredsState}/>
              </label>
            </div>
          </div>
          <p className="help-text alert" id="passwordHelpText">
            {
              this.state.error && this.state.error
            }
          </p>

          <div className="row">
            <button type="button" className="success button" onClick={this.loginClicked}>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  //course: PropTypes.object.isRequired
};

Login.contextTypes = {
  router: PropTypes.object
};

export default Login;
