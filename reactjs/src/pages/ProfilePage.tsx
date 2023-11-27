import React from "react";
import { withRouter } from "react-router-dom";
import ProfileForm from "../components/ProfileForm.tsx";

const ProfilePage = (props) => {
  return (
    <ProfileForm
      userid={props.userid}
      openAlert={(type) => {
        props.openAlert(type);
      }}
    />
  );
};
export default withRouter(ProfilePage);
