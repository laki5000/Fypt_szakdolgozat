import React from "react";
import LineWithTitle from "../components/lineWithTitle";
import ProfileForm from "../components/profileForm";

const ProfilePage = (props) => {
  return (
    <div>
      <div className="slide2">
        <LineWithTitle title="Profil" />
      </div>
      <div className="slide1">
        <ProfileForm />
      </div>
    </div>
  );
};
export default ProfilePage;
