import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import TrainerService from "../services/trainerService";
import UserService from "../services/userService";
import DetectMobile from "../services/detectMobile";
import AdminService from "../services/adminService";

const TrainersAndUsers = (props) => {
  const isMobile = DetectMobile();
  const history = useHistory();

  const [actualState, setNewState] = useState({
    trainersAndUsers: [],
  });

  const edzoHitelesitese = (id) => {
    TrainerService.getTrainer(id).then((res) => {
      let tmpTrainer = res.data;
      tmpTrainer.hiteles = true;
      TrainerService.saveTrainer(tmpTrainer).then(() => {
        edzoJelentkezesekBetoltese();
      });
    });
  };

  const edzoTorlese = (id) => {
    TrainerService.deleteTrainer(id).then(() => {
      edzoJelentkezesekBetoltese();
    });
  };

  const felhasznaloTorlese = (id) => {
    TrainerService.deleteTrainer(id).then(() => {
      UserService.deleteUser(id).then(() => {
        edzoJelentkezesekBetoltese();
      });
    });
  };

  const edzoJelentkezesekBetoltese = () => {
    switch (props.mode) {
      case "applications":
        TrainerService.loadTrainersAndUsers("0").then((res) => {
          setNewState({ trainersAndUsers: res.data });
        });
        break;
      case "trainers":
        TrainerService.loadAllTrainersAndUsers().then((res) => {
          setNewState({ trainersAndUsers: res.data });
        });
        break;
      case "users":
        UserService.getAllUser().then((res) => {
          setNewState({ trainersAndUsers: res.data });
        });
        break;
    }
  };

  const edzokBetoltese = () => {
    TrainerService.loadTrainersAndUsers("1").then((res) => {
      setNewState({ trainersAndUsers: res.data });
    });
  };

  useEffect(() => {
    if (props.with === "admin") {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");
      if (token && id) {
        UserService.authUser(token).then((res) => {
          if (res) {
            AdminService.getAdmindata(id).then((res) => {
              if (!res.data) {
                history.push("/homePage");
              } else {
                edzoJelentkezesekBetoltese();
              }
            });
          }
        });
      }
    } else {
      edzokBetoltese();
    }

    if (props.onInit) {
      props.onInit();
    }
  }, []);

  return (
    <div
      className={`d-flex bg-dark 
          ${isMobile ? "pt-5 pb-5 h1 w-100 px-1" : "pt-2 pb-2 h6"}`}
    >
      <div
        className={`d-flex flex-column mx-auto pt-5 pb-5 
            ${isMobile ? "w-100" : "w-50"}`}
      >
        {actualState.trainersAndUsers.map((trainer, index) => (
          <div
            className={`d-flex mx-auto p-3 m-5 text-light border border-primary
                ${isMobile ? "w-75 flex-column" : "w-100 flex-row"}`}
            key={index}
          >
            <div
              className={`d-flex flex-column 
                ${isMobile ? "w-75 m-auto" : "w-25"}`}
            >
              <div
                className={`mb-2 
                  ${isMobile ? "h1 m-auto" : "h4"}`}
              >
                {trainer.vezetekNev} {trainer.keresztNev}{" "}
                {UserService.getAge(trainer.szulIdo)}
              </div>
              <div>
                <img
                  src="profile_pic_def.jpg"
                  style={{ width: "100%" }}
                  alt="profile_pic"
                ></img>
              </div>
              {props.with === "admin" && (
                <div
                  className={`d-flex mt-4 m-auto 
                    ${isMobile ? "h1 mb-5" : "h3"}`}
                >
                  {trainer.userId ? (
                    <>
                      {!trainer.hiteles && (
                        <div className="text-success crsrp">
                          <FontAwesomeIcon
                            icon={faCheck}
                            onClick={() => {
                              edzoHitelesitese(trainer.id);
                            }}
                          />
                        </div>
                      )}
                      <div className="text-danger crsrp ms-5">
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            edzoTorlese(trainer.id);
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <div
                      className={`d-flex mt-4 m-auto 
                        ${isMobile ? "h1 mb-5" : "h3"}`}
                    >
                      <div className="text-danger crsrp ms-5">
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            felhasznaloTorlese(trainer.id);
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className={`d-flex flex-column w-75
                ${isMobile ? "m-auto" : ""}`}
            >
              <div
                className={`d-flex mb-2 w-100 justify-content-center 
                  ${isMobile ? "h1" : "h3"}`}
              >
                Adatok
              </div>
              <div
                className={`d-flex w-100 justify-content-center
                  ${isMobile ? "flex-column" : "flex-row"}`}
              >
                <div
                  className={`d-flex flex-column
                    ${isMobile ? "" : "ms-5"}`}
                >
                  <p>Vezetéknév: {trainer.vezetekNev}</p>
                  <p>Keresztnév: {trainer.keresztNev}</p>
                  <p>Nem: {trainer.nem}</p>
                  <p>
                    Születési hely, idő: {trainer.szulHely} {trainer.szulIdo}
                  </p>
                  <p>
                    Irányítószám, város: {trainer.iranyitoSzam}{" "}
                    {trainer.lakhelyVaros}
                  </p>
                  <p>E-mail: {trainer.eMail}</p>
                  <p>Magasság: {trainer.magassag} cm</p>
                  <p>Testsúly: {trainer.testsuly} kg</p>
                </div>
                {trainer.userId && (
                  <div
                    className={`d-flex flex-column
                    ${isMobile ? "" : "ms-5"}`}
                  >
                    <p>Kiket vállal: {trainer.kiketVallal}</p>
                    <p>Specializáció: {trainer.specializacio}</p>
                    <p>Végzettség: {trainer.vegzettseg}</p>
                    <p>Hol: {trainer.hol}</p>
                    <p>
                      Online tréninget vállal: {trainer.online ? "Igen" : "Nem"}
                    </p>
                    <p>Tapasztalat: {trainer.tapasztalat}</p>
                    <p>Telefonszám: {trainer.telefonszam}</p>
                    <p>Bemutatkozás: {trainer.bemutatkozas}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default withRouter(TrainersAndUsers);
