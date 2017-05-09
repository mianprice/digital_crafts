import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Login.action';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login_label">Username:</div>
        <input className="login_input" type="text" value={this.props.login.username} onChange={event => this.props.l_update_username(event.target.value)}/>
        <div className="login_label">Password:</div>
        <input className="login_input" type="text" value={this.props.login.password} onChange={event => this.props.l_update_password(event.target.value)}/>
        <div className="login_send" onClick={event => this.props.login_send(this.props.login)}>Create Account</div>
      </div>
    );
  }
}

const LoginContainer = ReactRedux.connect(
  state => ({
    login: state.login
  }),
  actions
)(Login);

export default LoginContainer;
