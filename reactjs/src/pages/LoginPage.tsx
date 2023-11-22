import React from "react";
import { withRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import LoginForm from "../components/LoginForm.tsx";

const HomePage = (props) => {
  React.useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("userid")) {
      props.history.push("/home");
    }
  }, []);

  return (
    <Box>
      <LoginForm
        setIsLoggedIn={() => props.setIsLoggedIn()}
        openAlert={(type) => {
          props.openAlert(type);
        }}
        setNewState={(userid, token) => {
          props.setNewState(userid, token);
        }}
      />
    </Box>
  );
};
export default withRouter(HomePage);
