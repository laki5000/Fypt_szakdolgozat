import LoginForm from '../components/loginForm';
import React, { Component } from 'react';
import LineWithTitle from '../components/lineWithTitle';

export default class LoginPage extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <div>
          <LineWithTitle title="Bejelentkezés" />
        </div>
        <div>
          <LoginForm onLogin={this.props.onLogin} />
        </div>
      </div>
    );
  }
}
  