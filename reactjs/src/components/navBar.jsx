import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const { isAuthenticated, keresztNev, admin, onLogout } = props;

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
    <div className="divrow bgclr1 pddnglr1 pddngt1">
      <div className="divrow jcc bgclr2 divlogop">
        <div className="pddng1 wdth1 mrgna tac">
          <div
            className="hvr1 crsrp linkico"
            onClick={() => navigateTo("adminPage")}
          >
            <img className="wdth3" src="dumbell_icon.jpg" alt="logo"></img>
          </div>
        </div>
      </div>
      <div className="divcol bgclr2 divlgnandmenu">
        <div className="divrow bgclr2 divlgnoptns">
          {actualState.isAuthenticated ? (
            <>
              {admin && (
                <div className="divlgnfunctns">
                  <div
                    className="hvr1 crsrp linkico"
                    onClick={() => navigateTo("adminPage")}
                  >
                    <FontAwesomeIcon icon={faUserTie} />
                  </div>
                </div>
              )}
              <div className="divlgnfunctns">
                <div
                  className="hvr1 crsrp linkico"
                  onClick={() => navigateTo("profilePage")}
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <div className="divlgnfunctns hvr1 linkico">
                Hello {actualState.keresztNev}
              </div>
              <div className="divlgnfunctns">
                <div
                  className="hvr1 crsrp linkico"
                  onClick={() => {
                    navigateTo("homePage");
                    logoutUser();
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
              </div>
            </>
          ) : (
            <div className="crsrp divlgnfunctns">
              <div
                className="hvr1 linkico"
                onClick={() => navigateTo("loginPage")}
              >
                <div>Bejelentkezés</div>
              </div>
            </div>
          )}
        </div>
        <div className="divrow wdth1">
          <div
            className="divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns"
            onClick={() => navigateTo("homePage")}
          >
            <div className="divmnuoptns2">Kezdőlap</div>
          </div>
          <div
            className="divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns"
            onClick={() => navigateTo("trainersPage")}
          >
            <div className="divmnuoptns2">Edzőink</div>
          </div>
          <div
            className="divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns"
            onClick={() => navigateTo("calCalcPage")}
          >
            <div className="divmnuoptns2">Kalória Kalkulátor</div>
          </div>
          <div
            className="divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns"
            onClick={() => navigateTo("joinPage")}
          >
            <div className="divmnuoptns2">Csatlakozz</div>
          </div>
          <div
            className="divrow div_padding_top1 jcc crsrp hvr1 pddngt1 divmnuoptns"
            onClick={() => navigateTo("aboutPage")}
          >
            <div className="divmnuoptns2">Rólunk</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(NavBar);
