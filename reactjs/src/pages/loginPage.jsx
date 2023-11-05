import React from 'react';
import LoginForm from '../components/loginForm';
import LineWithTitle from '../components/lineWithTitle';

const LoginPage = (props) => {
  return (
    <div>
      <div>
        <LineWithTitle title="Bejelentkezés" />
      </div>
      <div>
        <LoginForm onLogin={props.onLogin} />
      </div>
    </div>
  );
}
export default LoginPage;