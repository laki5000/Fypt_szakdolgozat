import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import UserService from "../services/userService";

const ProfileForm = (props) => {
  const [actualState, setNewState] = useState({
    vezetek_nev_input_visibility: false,
    kereszt_nev_input_visibility: false,
    nem_input_visibility: false,
    szul_hely_ido_input_visibility: false,
    iranyitoszam_varos_input_visibility: false,
    email_input_visibility: false,
    jelszo_input_visibility: false,
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
    vezetek_nev_tmp: "",
    kereszt_nev_tmp: "",
    nem_tmp: "",
    szul_hely_tmp: "",
    szul_ido_tmp: "",
    iranyitoszam_tmp: "",
    lakhely_varos_tmp: "",
    email_tmp: "",
    jelszo_tmp: "",
  });

  const changeField = (statetochange) => {
    switch (statetochange) {
      case "vezetek_nev":
        setNewState({ ...actualState, vezetek_nev_input_visibility: true });
        break;
      case "kereszt_nev":
        setNewState({ ...actualState, kereszt_nev_input_visibility: true });
        break;
      case "nem":
        setNewState({ ...actualState, nem_input_visibility: true });
        break;
      case "szul_hely_ido":
        setNewState({ ...actualState, szul_hely_ido_input_visibility: true });
        break;
      case "iranyitoszam_varos":
        setNewState({
          ...actualState,
          iranyitoszam_varos_input_visibility: true,
        });
        break;
      case "e-mail":
        setNewState({ ...actualState, email_input_visibility: true });
        break;
      case "jelszo":
        setNewState({ ...actualState, jelszo_input_visibility: true });
        break;
    }
  };

  const saveField = (statetochange) => {
    let user = {
      vezetekNev: actualState.vezetek_nev,
      keresztNev: actualState.kereszt_nev,
      nem: actualState.nem,
      szulHely: actualState.szul_hely,
      szulIdo: actualState.szul_ido,
      iranyitoSzam: actualState.iranyitoszam,
      lakhelyVaros: actualState.lakhely_varos,
      eMail: actualState.email,
      jelszo: actualState.jelszo,
      id: actualState.id,
    };

    switch (statetochange) {
      case "vezetek_nev":
        setNewState({
          ...actualState,
          vezetek_nev_input_visibility: false,
          vezetek_nev: actualState.vezetek_nev_tmp,
        });
        user.vezetekNev = actualState.vezetek_nev_tmp;
        break;
      case "kereszt_nev":
        setNewState({
          ...actualState,
          kereszt_nev_input_visibility: false,
          kereszt_nev: actualState.kereszt_nev_tmp,
        });
        user.keresztNev = actualState.kereszt_nev_tmp;
        break;
      case "nem":
        setNewState({
          ...actualState,
          nem_input_visibility: false,
          nem: actualState.nem_tmp,
        });
        user.nem = actualState.nem_tmp;
        break;
      case "szul_hely_ido":
        setNewState({
          ...actualState,
          szul_hely_ido_input_visibility: false,
          szul_hely: actualState.szul_hely_tmp,
          szul_ido: actualState.szul_ido_tmp,
        });
        user.szulHely = actualState.szul_hely_tmp;
        user.szulIdo = actualState.szul_ido_tmp;
        break;
      case "iranyitoszam_varos":
        setNewState({
          ...actualState,
          iranyitoszam_varos_input_visibility: false,
          iranyitoszam: actualState.iranyitoszam_tmp,
          lakhely_varos: actualState.lakhely_varos_tmp,
        });
        user.iranyitoSzam = actualState.iranyitoszam_tmp;
        user.lakhelyVaros = actualState.lakhely_varos_tmp;
        break;
      case "e-mail":
        setNewState({
          ...actualState,
          email_input_visibility: false,
          email: actualState.email_tmp,
        });
        user.eMail = actualState.email_tmp;
        break;
      case "jelszo":
        setNewState({
          ...actualState,
          jelszo_input_visibility: false,
          jelszo: actualState.jelszo_tmp,
        });
        user.jelszo = actualState.jelszo_tmp;
        break;
    }
    UserService.saveUser(user);
  };

  const clearChanges = (statetochange) => {
    switch (statetochange) {
      case "vezetek_nev":
        setNewState({
          ...actualState,
          vezetek_nev_input_visibility: false,
          vezetek_nev_tmp: actualState.vezetek_nev,
        });
        break;
      case "kereszt_nev":
        setNewState({
          ...actualState,
          kereszt_nev_input_visibility: false,
          kereszt_nev_tmp: actualState.kereszt_nev,
        });
        break;
      case "nem":
        setNewState({
          ...actualState,
          nem_input_visibility: false,
          nem_tmp: actualState.nem,
        });
        break;
      case "szul_hely_ido":
        setNewState({
          ...actualState,
          szul_hely_ido_input_visibility: false,
          szul_hely_tmp: actualState.szul_hely,
          szul_ido_tmp: actualState.szul_ido,
        });
        break;
      case "iranyitoszam_varos":
        setNewState({
          ...actualState,
          iranyitoszam_varos_input_visibility: false,
          iranyitoszam_tmp: actualState.iranyitoszam,
          lakhely_varos_tmp: actualState.lakhely_varos,
        });
        break;
      case "e-mail":
        setNewState({
          ...actualState,
          email_input_visibility: false,
          email_tmp: actualState.email,
        });
        break;
      case "jelszo":
        setNewState({
          ...actualState,
          jelszo_input_visibility: false,
          jelszo_tmp: actualState.jelszo,
        });
        break;
    }
  };

  const changeVezetekNevHandler = (event) => {
    setNewState({ ...actualState, vezetek_nev_tmp: event.target.value });
  };

  const changeKeresztNevHandler = (event) => {
    setNewState({ ...actualState, kereszt_nev_tmp: event.target.value });
  };

  const changeNemHandler = (event) => {
    if (event.target.value === "ferfi") {
      setNewState({ ...actualState, nem_tmp: "Férfi" });
    } else if (event.target.value === "no") {
      setNewState({ ...actualState, nem_tmp: "Nő" });
    }
  };

  const changeSzulHelyHandler = (event) => {
    setNewState({ ...actualState, szul_hely_tmp: event.target.value });
  };

  const changeSzulIdoHandler = (event) => {
    setNewState({ ...actualState, szul_ido_tmp: event.target.value });
  };

  const changeIranyitoszamHandler = (event) => {
    setNewState({ ...actualState, iranyitoszam_tmp: event.target.value });
  };

  const changeVarosHandler = (event) => {
    setNewState({ ...actualState, lakhely_varos_tmp: event.target.value });
  };

  const changeEmailHandler = (event) => {
    setNewState({ ...actualState, email_tmp: event.target.value });
  };

  const changeJelszoHandler = (event) => {
    setNewState({ ...actualState, jelszo_tmp: event.target.value });
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
            vezetek_nev_tmp: res.data.vezetekNev,
            kereszt_nev: res.data.keresztNev,
            kereszt_nev_tmp: res.data.keresztNev,
            nem: res.data.nem,
            nem_tmp: res.data.nem,
            szul_hely: res.data.szulHely,
            szul_hely_tmp: res.data.szulHely,
            szul_ido: res.data.szulIdo,
            szul_ido_tmp: res.data.szulIdo,
            iranyitoszam: res.data.iranyitoSzam,
            iranyitoszam_tmp: res.data.iranyitoSzam,
            lakhely_varos: res.data.lakhelyVaros,
            lakhely_varos_tmp: res.data.lakhelyVaros,
            email: res.data.eMail,
            email_tmp: res.data.eMail,
            jelszo: res.data.jelszo,
            jelszo_tmp: res.data.jelszo,
            id: id,
          }));
        });
      }
    }
  }, []);

  return (
    <div className="bg-dark pb-5">
      <div className="d-flex m-auto w-50">
        <div className="d-flex w-100 pt-4">
          <div className="d-flex flex-column w-50">
            <div className="text-light h2">
              {actualState.vezetek_nev} {actualState.kereszt_nev}
            </div>
            <div className="w-50">
              <img
                src="profile_pic_def.jpg"
                style={{ width: "100%" }}
                alt="profile_pic"
              ></img>
            </div>
          </div>
          <div className="w-50 ps-5 text-light">
            <div className="d-flex justify-content-center h2">Adatok</div>
            <div className="d-flex">
              <div className="h5 me-2">Vezetéknév: </div>
              {actualState.vezetek_nev_input_visibility ? (
                <div className="d-flex">
                  <div className="w-50">
                    <input
                      className="w-100"
                      name="vezetek_nev"
                      value={actualState.vezetek_nev_tmp}
                      onChange={changeVezetekNevHandler}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("vezetek_nev");
                      }}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("vezetek_nev");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div>{actualState.vezetek_nev}</div>
                  <div className="ms-1 crsrp">
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
            <div className="d-flex">
              <div className="h5 me-2">Keresztnév: </div>
              {actualState.kereszt_nev_input_visibility ? (
                <div className="d-flex">
                  <div className="w-50">
                    <input
                      className="w-100"
                      name="vezetek_nev"
                      value={actualState.kereszt_nev_tmp}
                      onChange={changeKeresztNevHandler}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("kereszt_nev");
                      }}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("kereszt_nev");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div>{actualState.kereszt_nev}</div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("kereszt_nev");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="h5 me-2">Nem: </div>
              {actualState.nem_input_visibility ? (
                <div className="d-flex">
                  <div className="w-75">
                    <select
                      className="w-100"
                      name="nem"
                      defaultValue="none"
                      onChange={changeNemHandler}
                    >
                      <option value="none" disabled hidden>
                        Válassz
                      </option>
                      <option value="ferfi">Férfi</option>
                      <option value="no">Nő</option>
                    </select>
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("nem");
                      }}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("nem");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div>{actualState.nem}</div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("nem");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="h5 me-2">Születési hely, idő: </div>
              {actualState.szul_hely_ido_input_visibility ? (
                <div className="d-flex">
                  <div className="d-flex flex-column w-50">
                    <input
                      className="w-100"
                      name="szul_hely"
                      value={actualState.szul_hely_tmp}
                      onChange={changeSzulHelyHandler}
                    />
                    <input
                      type="date"
                      className="w-100"
                      name="szul_ido"
                      value={actualState.szul_ido_tmp}
                      onChange={changeSzulIdoHandler}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("szul_hely_ido");
                      }}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("szul_hely_ido");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div>
                    {actualState.szul_hely + ", " + actualState.szul_ido}
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("szul_hely_ido");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="h5 me-2">Irányítószám, város: </div>
              {actualState.iranyitoszam_varos_input_visibility ? (
                <div className="d-flex">
                  <div className="d-flex flex-column w-50">
                    <input
                      type="number"
                      className="w-100"
                      name="iranyitoszam"
                      value={parseInt(actualState.iranyitoszam_tmp)}
                      onChange={changeIranyitoszamHandler}
                    />
                    <input
                      className="w-100"
                      name="varos"
                      value={actualState.lakhely_varos_tmp}
                      onChange={changeVarosHandler}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("iranyitoszam_varos");
                      }}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("iranyitoszam_varos");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div>
                    {actualState.iranyitoszam +
                      ", " +
                      actualState.lakhely_varos}
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("iranyitoszam_varos");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="h5 me-2">E-mail: </div>
              {actualState.email_input_visibility ? (
                <div className="d-flex">
                  <div className="w-50">
                    <input
                      className="w-100"
                      name="e-mail"
                      value={actualState.email_tmp}
                      onChange={changeEmailHandler}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("e-mail");
                      }}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("e-mail");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div>{actualState.email}</div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("e-mail");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="h5 me-2">Jelszó: </div>
              {actualState.jelszo_input_visibility ? (
                <div className="d-flex">
                  <div className="w-50">
                    <input
                      className="w-100"
                      name="jelszo"
                      value={actualState.jelszo_tmp}
                      onChange={changeJelszoHandler}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("jelszo");
                      }}
                    />
                  </div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("jelszo");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="d-flex">
                  <div>{actualState.jelszo}</div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("jelszo");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
