import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import DetectMobile from "../services/detectMobile";
import AdminService from "../services/adminService";
import UserService from "../services/userService";

const AdminMenu = (props) => {
  const history = useHistory();
  const isMobile = DetectMobile();

  const HandleTrainerApplciationsButton = () => {
    history.push("/trainerApplications");
  };

  const HandleAllTrainersButton = () => {
    history.push("/allTrainers");
  };

  const HandleAllUsersButton = () => {
    history.push("/allUsers");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    if (token && id) {
      UserService.authUser(token).then((res) => {
        if (res) {
          AdminService.getAdmindata(id).then((res) => {
            if (!res.data) {
              history.push("/homePage");
            }
          });
        }
      });
    }
  }, []);

  return (
    <div
      className={`d-flex bg-dark 
        ${isMobile ? "pt-5 pb-5 h1 w-100 px-1" : "pt-2 pb-2 h6"}`}
    >
      <div
        className={`d-flex mx-auto pt-5 pb-5
          ${isMobile ? "w-100 flex-column" : "w-50 flex-row"}`}
      >
        <div
          className={`border border-primary p-5 crsrp text-light m-auto text-center 
            ${isMobile ? "w-75 mt-5 mb-5" : "w-25 me-5 ms-5"}`}
          onClick={() => {
            HandleTrainerApplciationsButton();
          }}
        >
          Edző jelentkezések
        </div>
        <div
          className={`border border-primary p-5 crsrp text-light m-auto text-center 
            ${isMobile ? "w-75 mt-5 mb-5" : "w-25 me-5 ms-5"}`}
          onClick={() => {
            HandleAllTrainersButton();
          }}
        >
          Összes edző
        </div>
        <div
          className={`border border-primary p-5 crsrp text-light m-auto text-center
            ${isMobile ? "w-75 mt-5 mb-5" : "w-25 me-5 ms-5"}`}
          onClick={() => {
            HandleAllUsersButton();
          }}
        >
          Összes felhasználó
        </div>
      </div>
    </div>
  );
};
export default withRouter(AdminMenu);
