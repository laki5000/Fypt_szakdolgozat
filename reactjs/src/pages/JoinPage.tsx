import React from "react";
import { withRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import JoinForm from "../components/JoinForm.tsx";
import TrainerService from "../services/TrainerService.ts";

const JoinPage = (props) => {
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      TrainerService.getTrainerByUserid(props.userid).then((res) => {
        if (res.data.content.length > 0) {
          props.history.push("/home");
        }
      });
    } else {
      props.history.push("/login");
    }
  }, []);

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
