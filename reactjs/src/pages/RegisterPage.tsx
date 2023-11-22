import React from "react";
import { withRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import RegisterForm from "../components/RegisterForm.tsx";

const RegisterPage = (props) => {
  React.useEffect(() => {
    if (props.isLoggedIn) {
      props.history.push("/home");
    }
  }, []);

  return (
    <Box>
      <RegisterForm
        openAlert={(type) => {
          props.openAlert(type);
        }}
      />
    </Box>
  );
};
export default withRouter(RegisterPage);
