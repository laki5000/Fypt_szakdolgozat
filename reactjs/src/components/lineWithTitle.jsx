import React, { useEffect, useState } from "react";
import DetectMobile from "../services/detectMobile";

const LineWithTitle = (props) => {
  const isMobile = DetectMobile();
  const [actualState, setNewState] = useState({
    title: "",
  });

  useEffect(() => {
    let splitted = window.location.href.split("/");
    switch (splitted[splitted.length - 1]) {
      case "aboutPage":
        setNewState({ title: "Rólunk" });
        break;
      case "adminPage":
        setNewState({ title: "Admin menü" });
        break;
      case "calCalcPage":
        setNewState({ title: "Napi kalória" });
        break;
      case "homePage":
        setNewState({ title: "Kezdőlap" });
        break;
      case "joinPage":
        setNewState({ title: "Csatlakozz" });
        break;
      case "loginPage":
        setNewState({ title: "Bejelentkezés" });
        break;
      case "profilePage":
        setNewState({ title: "Profil" });
        break;
      case "registerPage":
        setNewState({ title: "Regisztráció" });
        break;
      case "trainersPage":
        setNewState({ title: "Edzőink" });
        break;
    }
  }, [props.title]);

  return (
    <div
      className={`bg-primary text-light h1 pl_sajat1 
      ${isMobile ? "pt-3 pb-3" : "pt-2 pb-2"}`}
    >
      {actualState.title}
    </div>
  );
};
export default LineWithTitle;
