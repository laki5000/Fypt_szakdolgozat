import React from "react";
import { withRouter } from "react-router-dom";
import ProfileForm from "../components/ProfileForm.tsx";

const ProfilePage = (props) => {
  return <ProfileForm userid={props.userid} />;
};
export default withRouter(ProfilePage);
