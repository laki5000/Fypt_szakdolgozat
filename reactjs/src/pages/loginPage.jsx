import React from "react";
import LoginForm from "../components/loginForm";
import LineWithTitle from "../components/lineWithTitle";

const LoginPage = (props) => {
  return (
    <div>
      <div className="slide2">
        <LineWithTitle title="Bejelentkezés" />
      </div>
      <div className="slide1">
        <LoginForm onLogin={props.onLogin} />
      </div>
    </div>
  );
};
export default LoginPage;
