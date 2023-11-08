import React, { useEffect } from "react";
import LoginForm from "../components/loginForm";

const LoginPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <LoginForm onLogin={props.onLogin} />
    </div>
  );
};
export default LoginPage;
