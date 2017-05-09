import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Signup.action';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup">
        <div className="signup_label">Username:</div>
        <input className="signup_input" type="text" value={this.props.signup.username} onChange={event => this.props.s_update_username(event.target.value)}/>
        <div className="signup_label">Password:</div>
        <input className="signup_input" type="text" value={this.props.signup.password} onChange={event => this.props.s_update_password(event.target.value)}/>
        <div className="signup_send" onClick={event => this.props.signup_send(this.props.signup)}>Create Account</div>
      </div>
    );
  }
}

const SignupContainer = ReactRedux.connect(
  state => ({
    signup: state.signup
  }),
  actions
)(Signup);

export default SignupContainer;
