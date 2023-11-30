import React from "react";
import { withRouter } from "react-router-dom";
import ProfileForm from "../components/ProfileForm.tsx";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

const ProfilePage = (props) => {
  return (
    <Box sx={{ pb: 5, pt: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Container component="main" maxWidth="md">
        <ProfileForm
          userid={props.userid}
          isTrainer={props.isTrainer}
          openAlert={(type) => {
            props.openAlert(type);
          }}
          setIsLoggedIn={() => {
            props.setIsLoggedIn();
          }}
          setNewState={() => {
            props.setNewState();
          }}
          setIsTrainer={() => {
            props.setIsTrainer();
          }}
        />
      </Container>
    </Box>
  );
};
export default withRouter(ProfilePage);
