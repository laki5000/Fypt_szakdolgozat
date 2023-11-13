import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import DetectMobile from "../services/detectMobile";

const NavBar = (props) => {
  const { isAuthenticated, keresztNev, admin, onLogout } = props;
  const isMobile = DetectMobile();

  const [actualState, setNewState] = useState({
    isAuthenticated: isAuthenticated,
    keresztNev: keresztNev,
    admin: admin,
  });

  const logoutUser = () => {
    setNewState({
      isAuthenticated: false,
      keresztNev: "",
      admin: "",
    });
    onLogout();
  };

  const navigateTo = (link) => {
    switch (link) {
      case "homePage":
        props.history.push("/homePage");
        break;
      case "trainersPage":
        props.history.push("/trainersPage");
        break;
      case "calCalcPage":
        props.history.push("/calCalcPage");
        break;
      case "joinPage":
        props.history.push("/joinPage");
        break;
      case "aboutPage":
        props.history.push("/aboutPage");
        break;
      case "loginPage":
        props.history.push("/loginPage");
        break;
      case "profilePage":
        props.history.push("/profilePage");
        break;
      case "adminPage":
        props.history.push("/adminPage");
        break;
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setNewState((prevState) => ({
        ...prevState,
        isAuthenticated: isAuthenticated,
      }));
    }
    if (keresztNev) {
      setNewState((prevState) => ({
        ...prevState,
        keresztNev: keresztNev,
      }));
    }
    if (admin) {
      setNewState((prevState) => ({
        ...prevState,
        admin: admin,
      }));
    }
  }, [isAuthenticated, keresztNev, admin]);

  return (
    <div className="d-flex">
      {!isMobile && (
        <div className="d-flex bg-dark col-sm-3">
          <div className="d-flex">
            <div
              className="d-flex crsrp m-auto"
              onClick={() => navigateTo("homePage")}
            >
              <img
                className="d-flex m-auto p-3"
                style={{ width: "60%", height: "60%" }}
                src="dumbell_icon.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`d-flex flex-column bg-dark  pt-2 px-1 ${
          isMobile ? "w-100" : "col-sm-9"
        }`}
      >
        <div className="d-flex flex-row-reverse mx-3 mt-2">
          {actualState.isAuthenticated ? (
            <>
              <div className="mx-2">
                <div
                  className={`text-light crsrp ${isMobile ? "h1" : "h5"}`}
                  onClick={() => {
                    navigateTo("homePage");
                    logoutUser();
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
              </div>
              <div className={`text-light crsrp ${isMobile ? "h1" : "h5"}`}>
                Hello {actualState.keresztNev}
              </div>

              <div className="mx-2">
                <div
                  className={`text-light crsrp ${isMobile ? "h1" : "h5"}`}
                  onClick={() => navigateTo("profilePage")}
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              {admin && (
                <div className="mx-2">
                  <div
                    className={`text-light crsrp ${isMobile ? "h1" : "h5"}`}
                    onClick={() => navigateTo("adminPage")}
                  >
                    <FontAwesomeIcon icon={faUserTie} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="mx-2">
              <div
                className={`text-light crsrp ${isMobile ? "h1" : "h5"}`}
                onClick={() => navigateTo("loginPage")}
              >
                <div>Bejelentkezés</div>
              </div>
            </div>
          )}
        </div>
        <div className="d-flex mt-3">
          <div className="hvr1 d-flex justify-content-center w-25 pt-2 pb-2 h4">
            <div
              className="text-light crsrp"
              onClick={() => navigateTo("homePage")}
            >
              Kezdőlap
            </div>
          </div>
          <div className="hvr1 d-flex justify-content-center w-25 pt-2 pb-2 h4">
            <div
              className="text-light crsrp"
              onClick={() => navigateTo("trainersPage")}
            >
              Edzőink
            </div>
          </div>
          <div className="hvr1 d-flex justify-content-center w-25 pt-2 pb-2 h4">
            <div
              className="text-light crsrp"
              onClick={() => navigateTo("calCalcPage")}
            >
              Napi kalória
            </div>
          </div>
          <div className="hvr1 d-flex justify-content-center w-25 pt-2 pb-2 h4">
            <div
              className="text-light crsrp"
              onClick={() => navigateTo("joinPage")}
            >
              Csatlakozz
            </div>
          </div>
          <div className="hvr1 d-flex justify-content-center w-25 pt-2 pb-2 h4">
            <div
              className="text-light crsrp"
              onClick={() => navigateTo("aboutPage")}
            >
              Rólunk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(NavBar);
