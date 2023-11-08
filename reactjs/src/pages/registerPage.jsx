import React, { useEffect } from "react";
import RegisterForm from "../components/registerForm";

const RegisterPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
