import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import DetectMobile from "../services/detectMobile";

const AdminMenu = (props) => {
  const history = useHistory();
  const isMobile = DetectMobile();

  const HandletrainersAndUsersButton = () => {
    history.push("/trainerApplications");
  };

  return (
    <div
      className={`d-flex bg-dark 
    ${isMobile ? "pt-5 pb-5 h1 w-100 px-1" : "pt-2 pb-2 h6"}`}
    >
      <div
        className={`d-flex mx-auto pt-5 pb-5 ${
          isMobile ? "w-100 flex-column" : "w-50 flex-row"
        }`}
      >
        <div
          className={`border border-primary p-5 crsrp text-light mx-auto ${
            isMobile ? "w-75 mt-5 mb-5" : "w-25 me-5 ms-5"
          }`}
          onClick={() => {
            HandletrainersAndUsersButton();
          }}
        >
          Edző jelentkezések
        </div>
        <div
          className={`border border-primary p-5 crsrp text-light mx-auto ${
            isMobile ? "w-75 mt-5 mb-5" : "w-25 me-5 ms-5"
          }`}
        >
          Edző jelentkezések
        </div>
        <div
          className={`border border-primary p-5 crsrp text-light mx-auto  ${
            isMobile ? "w-75 mt-5 mb-5" : "w-25 me-5 ms-5"
          }`}
        >
          Edző jelentkezések
        </div>
      </div>
    </div>
  );
};
export default withRouter(AdminMenu);
