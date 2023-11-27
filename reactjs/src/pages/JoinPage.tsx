import React from "react";
import { withRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import JoinForm from "../components/JoinForm.tsx";

const JoinPage = (props) => {
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      if (props.isTrainer) {
        props.history.push("/home");
      }
    } else {
      props.history.push("/login");
    }
  }, [props.isTrainer]);

  return (
    <Box>
      <JoinForm
        openAlert={(type) => {
          props.openAlert(type);
        }}
        userid={props.userid}
      />
    </Box>
  );
};
export default withRouter(JoinPage);
