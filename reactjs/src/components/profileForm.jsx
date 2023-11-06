import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import UserService from "../services/userService";

const ProfileForm = (props) => {
  const [actualState, setNewState] = useState({
    vezetek_nev_input_visibility: false,
    vezetek_nev: "",
    kereszt_nev: "",
    nem: "",
    szul_hely: "",
    szul_ido: "",
    iranyitoszam: "",
    lakhely_varos: "",
    email: "",
    jelszo: "",
    id: "",
  });

  const changeField = (statetochange) => {
    switch (statetochange) {
      case "vezetek_nev":
        setNewState({ ...actualState, vezetek_nev_input_visibility: true });
        break;
    }
  };

  const saveField = (statetochange) => {
    switch (statetochange) {
      case "vezetek_nev":
        setNewState({ ...actualState, vezetek_nev_input_visibility: false });
        break;
    }
  };

  const clearChanges = (statetochange) => {
    switch (statetochange) {
      case "vezetek_nev":
        setNewState({ ...actualState, vezetek_nev_input_visibility: false });
        break;
    }
  };

  const changeVezetekNevHandler = (event) => {
    setNewState({ ...actualState, vezetek_nev: event.target.value });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    if (token && id) {
      if (UserService.authUser(token)) {
        UserService.getUserdata(id).then((res) => {
          setNewState((prevState) => ({
            ...prevState,
            vezetek_nev: res.data.vezetekNev,
            kereszt_nev: res.data.keresztNev,
            nem: res.data.nem,
            szul_hely: res.data.szulHely,
            szul_ido: res.data.szulIdo,
            iranyitoszam: res.data.iranyitoSzam,
            lakhely_varos: res.data.lakhelyVaros,
            email: res.data.eMail,
            jelszo: res.data.jelszo,
            id: id,
          }));
        });
      }
    }
  }, []);

  return (
    <div className="divcol pddnglr1 pddngt1 tac bgisr mrgnlr1 pddngbt1 divjnregstr">
      <div className="divcol">
        <div className="divrow">
          <div className="divcol">
            <div>
              {actualState.vezetek_nev} {actualState.kereszt_nev}
            </div>
            <div className="divprflpc"></div>
          </div>
          <div className="divcol">
            <div>Adatok</div>
            <div className="divrow">
              <div>Vezetéknév: </div>
              {actualState.vezetek_nev_input_visibility ? (
                <div className="divrow">
                  <div>
                    <input
                      name="vezetek_nev"
                      value={actualState.vezetek_nev}
                      onChange={changeVezetekNevHandler}
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("vezetek_nev");
                      }}
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("vezetek_nev");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="divrow">
                  <div>{actualState.vezetek_nev}</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("vezetek_nev");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="divrow">
              <div>Keresztnév: </div>
              <div>{actualState.kereszt_nev}</div>
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="divrow">
              <div>Nem: </div>
              <div>{actualState.nem}</div>
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="divrow">
              <div>Születési hely, idő: </div>
              <div>
                {actualState.szul_hely}, {actualState.szul_ido}
              </div>
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="divrow">
              <div>Irányítószám, város: </div>
              <div>
                {actualState.iranyitoszam}, {actualState.lakhely_varos}
              </div>
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="divrow">
              <div>Email: </div>
              <div>{actualState.email}</div>
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="divrow">
              <div>Jelszó: </div>
              <div>{actualState.jelszo}</div>
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
