import React from "react";
import LineWithTitle from "../components/lineWithTitle";
import ProfileForm from "../components/profileForm";

const ProfilePage = (props) => {
  return (
    <div>
      <div>
        <LineWithTitle title="Profil"/>
      </div>
      <div>
        <ProfileForm/>
      </div>
    </div>
  );
}
export default ProfilePage;
  