import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";

const ProfileAvatar = ({ id }) => {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = id + ".jpg";

    img.onload = () => {
      setImageExists(true);
    };

    img.onerror = () => {
      setImageExists(false);
    };
  }, [id]);

  return (
    <Avatar
      sx={{ width: 80, height: 80, margin: "auto" }}
      alt="profile picture"
      src={imageExists ? id + ".jpg" : "profile_pic_def.jpg"}
    />
  );
};

export default ProfileAvatar;
