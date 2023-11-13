import React, { useEffect } from "react";
import ProfileForm from "../components/profileForm";

const ProfilePage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <ProfileForm />
    </div>
  );
};
export default ProfilePage;
