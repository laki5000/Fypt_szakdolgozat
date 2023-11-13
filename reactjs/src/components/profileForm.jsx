import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import UserService from "../services/userService";
import TrainerService from "../services/trainerService";
import DetectMobile from "../services/detectMobile";

const ProfileForm = (props) => {
  const isMobile = DetectMobile();

  const [actualState, setNewState] = useState({
    vezetek_nev_input_visibility: false,
    kereszt_nev_input_visibility: false,
    nem_input_visibility: false,
    szul_hely_ido_input_visibility: false,
    iranyitoszam_varos_input_visibility: false,
    email_input_visibility: false,
    jelszo_input_visibility: false,
    magassag_input_visibility: false,
    testsuly_input_visibility: false,
    kiket_vallal_input_visibility: false,
    specializacio_input_visibility: false,
    vegzettseg_input_visibility: false,
    hol_input_visibility: false,
    online_input_visibility: false,
    tapasztalat_input_visibility: false,
    telefonszam_input_visibility: false,
    bemutatkozas_input_visibility: false,
    hiteles_input_visibility: false,
    vezetek_nev: "",
    kereszt_nev: "",
    nem: "",
    szul_hely: "",
    szul_ido: "",
    iranyitoszam: "",
    lakhely_varos: "",
    email: "",
    jelszo: "",
    magassag: "",
    testsuly: "",
    kiket_vallal: "",
    specializacio: "",
    vegzettseg: "",
    hol: "",
    online: "",
    tapasztalat: "",
    telefonszam: "",
    bemutatkozas: "",
    hiteles: "",
    id: "",
    trainer_id: "",
    vezetek_nev_tmp: "",
    kereszt_nev_tmp: "",
    nem_tmp: "",
    szul_hely_tmp: "",
    szul_ido_tmp: "",
    iranyitoszam_tmp: "",
    lakhely_varos_tmp: "",
    email_tmp: "",
    jelszo_tmp: "",
    magassag_tmp: "",
    testsuly_tmp: "",
    kiket_vallal_tmp: "",
    specializacio_tmp: "",
    vegzettseg_tmp: "",
    hol_tmp: "",
    online_tmp: "",
    tapasztalat_tmp: "",
    telefonszam_tmp: "",
    bemutatkozas_tmp: "",
    edzo: false,
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
      case "magassag":
        setNewState({ ...actualState, magassag_input_visibility: true });
        break;
      case "testsuly":
        setNewState({ ...actualState, testsuly_input_visibility: true });
        break;
      case "kiket_vallal":
        setNewState({ ...actualState, kiket_vallal_input_visibility: true });
        break;
      case "specializacio":
        setNewState({ ...actualState, specializacio_input_visibility: true });
        break;
      case "vegzettseg":
        setNewState({ ...actualState, vegzettseg_input_visibility: true });
        break;
      case "hol":
        setNewState({ ...actualState, hol_input_visibility: true });
        break;
      case "online":
        setNewState({ ...actualState, online_input_visibility: true });
        break;
      case "tapasztalat":
        setNewState({ ...actualState, tapasztalat_input_visibility: true });
        break;
      case "telefonszam":
        setNewState({ ...actualState, telefonszam_input_visibility: true });
        break;
      case "bemutatkozas":
        setNewState({ ...actualState, bemutatkozas_input_visibility: true });
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
      magassag: actualState.magassag,
      testsuly: actualState.testsuly,
      id: actualState.id,
    };

    let trainer = {
      id: actualState.trainer_id,
      kiketVallal: actualState.kiket_vallal,
      specializacio: actualState.specializacio,
      vegzettseg: actualState.vegzettseg,
      hol: actualState.hol,
      online: actualState.online,
      tapasztalat: actualState.tapasztalat,
      telefonszam: actualState.telefonszam,
      bemutatkozas: actualState.bemutatkozas,
      userId: actualState.id,
      hiteles: actualState.hiteles,
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
      case "magassag":
        setNewState({
          ...actualState,
          magassag_input_visibility: false,
          magassag: actualState.magassag_tmp,
        });
        user.magassag = actualState.magassag_tmp;
        break;
      case "testsuly":
        setNewState({
          ...actualState,
          testsuly_input_visibility: false,
          testsuly: actualState.testsuly_tmp,
        });
        user.testsuly = actualState.testsuly_tmp;
        break;
      case "kiket_vallal":
        setNewState({
          ...actualState,
          kiket_vallal_input_visibility: false,
          kiket_vallal: actualState.kiket_vallal_tmp,
        });
        trainer.kiketVallal = actualState.kiket_vallal_tmp;
        break;
      case "specializacio":
        setNewState({
          ...actualState,
          specializacio_input_visibility: false,
          specializacio: actualState.specializacio_tmp,
        });
        trainer.specializacio = actualState.specializacio_tmp;
        break;
      case "vegzettseg":
        setNewState({
          ...actualState,
          vegzettseg_input_visibility: false,
          vegzettseg: actualState.vegzettseg_tmp,
        });
        trainer.vegzettseg = actualState.vegzettseg_tmp;
        break;
      case "hol":
        setNewState({
          ...actualState,
          hol_input_visibility: false,
          hol: actualState.hol_tmp,
        });
        trainer.hol = actualState.hol_tmp;
        break;
      case "online":
        setNewState({
          ...actualState,
          online_input_visibility: false,
          online: actualState.online_tmp,
        });
        trainer.online = actualState.online_tmp;
        break;
      case "tapasztalat":
        setNewState({
          ...actualState,
          tapasztalat_input_visibility: false,
          tapasztalat: actualState.tapasztalat_tmp,
        });
        trainer.tapasztalat = actualState.tapasztalat_tmp;
        break;
      case "telefonszam":
        setNewState({
          ...actualState,
          telefonszam_input_visibility: false,
          telefonszam: actualState.telefonszam_tmp,
        });
        trainer.telefonszam = actualState.telefonszam_tmp;
        break;
      case "bemutatkozas":
        setNewState({
          ...actualState,
          bemutatkozas_input_visibility: false,
          bemutatkozas: actualState.bemutatkozas_tmp,
        });
        trainer.bemutatkozas = actualState.bemutatkozas_tmp;
        break;
    }
    UserService.saveUser(user);
    if (trainer.id) {
      TrainerService.saveTrainer(trainer);
    }
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
      case "magassag":
        setNewState({
          ...actualState,
          magassag_input_visibility: false,
          magassag_tmp: actualState.magassag,
        });
        break;
      case "testsuly":
        setNewState({
          ...actualState,
          testsuly_input_visibility: false,
          testsuly_tmp: actualState.testsuly,
        });
        break;
      case "kiket_vallal":
        setNewState({
          ...actualState,
          kiket_vallal_input_visibility: false,
          kiket_vallal_tmp: actualState.kiket_vallal,
        });
        break;
      case "specializacio":
        setNewState({
          ...actualState,
          specializacio_input_visibility: false,
          specializacio_tmp: actualState.specializacio,
        });
        break;
      case "vegzettseg":
        setNewState({
          ...actualState,
          vegzettseg_input_visibility: false,
          vegzettseg_tmp: actualState.vegzettseg,
        });
        break;
      case "hol":
        setNewState({
          ...actualState,
          hol_input_visibility: false,
          hol_tmp: actualState.hol,
        });
        break;
      case "online":
        setNewState({
          ...actualState,
          online_input_visibility: false,
          online_tmp: actualState.online,
        });
        break;
      case "tapasztalat":
        setNewState({
          ...actualState,
          tapasztalat_input_visibility: false,
          tapasztalat_tmp: actualState.tapasztalat,
        });
        break;
      case "telefonszam":
        setNewState({
          ...actualState,
          telefonszam_input_visibility: false,
          telefonszam_tmp: actualState.telefonszam,
        });
        break;
      case "bemutatkozas":
        setNewState({
          ...actualState,
          bemutatkozas_input_visibility: false,
          bemutatkozas_tmp: actualState.bemutatkozas,
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

  const changeMagassagHandler = (event) => {
    setNewState({ ...actualState, magassag_tmp: event.target.value });
  };

  const changeTestsulyHandler = (event) => {
    setNewState({ ...actualState, testsuly_tmp: event.target.value });
  };

  const changeKiketVallalHandler = (event) => {
    if (event.target.value === "ferfi") {
      setNewState({ ...actualState, kiket_vallal_tmp: "Férfi" });
    } else if (event.target.value === "no") {
      setNewState({ ...actualState, kiket_vallal_tmp: "Nő" });
    } else if (event.target.value === "mindenki") {
      setNewState({ ...actualState, kiket_vallal_tmp: "Mindenki" });
    }
  };

  const changeSpecializacioHandler = (event) => {
    setNewState({ ...actualState, specializacio_tmp: event.target.value });
  };

  const changeVegzettsegHandler = (event) => {
    setNewState({ ...actualState, vegzettseg_tmp: event.target.value });
  };

  const changeHolHandler = (event) => {
    setNewState({ ...actualState, hol_tmp: event.target.value });
  };

  const changeOnlineHandler = (event) => {
    if (event.target.value === "igen") {
      setNewState({ ...actualState, online_tmp: "True" });
    } else if (event.target.value === "nem") {
      setNewState({ ...actualState, online_tmp: "False" });
    }
  };

  const changeTapasztalatHandler = (event) => {
    setNewState({ ...actualState, tapasztalat_tmp: event.target.value });
  };

  const changeTelefonszamHandler = (event) => {
    setNewState({ ...actualState, telefonszam_tmp: event.target.value });
  };

  const changeBemutatkozasHandler = (event) => {
    setNewState({ ...actualState, bemutatkozas_tmp: event.target.value });
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
            magassag: res.data.magassag,
            magassag_tmp: res.data.magassag,
            testsuly: res.data.testsuly,
            testsuly_tmp: res.data.testsuly,
            id: id,
          }));
          TrainerService.getTrainerByUserId(id).then((resp) => {
            if (resp.data) {
              setNewState((prevState) => ({
                ...prevState,
                edzo: true,
                kiket_vallal: resp.data.kiketVallal,
                specializacio: resp.data.specializacio,
                vegzettseg: resp.data.vegzettseg,
                hol: resp.data.hol,
                online: resp.data.online,
                tapasztalat: resp.data.tapasztalat,
                telefonszam: resp.data.telefonszam,
                bemutatkozas: resp.data.bemutatkozas,
                hiteles: resp.data.hiteles,
                trainer_id: resp.data.id,
                kiket_vallal_tmp: resp.data.kiketVallal,
                specializacio_tmp: resp.data.specializacio,
                vegzettseg_tmp: resp.data.vegzettseg,
                hol_tmp: resp.data.hol,
                online_tmp: resp.data.online,
                tapasztalat_tmp: resp.data.tapasztalat,
                telefonszam_tmp: resp.data.telefonszam,
                bemutatkozas_tmp: resp.data.bemutatkozas,
              }));
            }
          });
        });
      }
    }
  }, []);

  return (
    <div className="bg-dark pb-5">
      <div
        className={`d-flex m-auto w-50 
          ${isMobile ? "w-100 px-5" : "w-50"}`}
      >
        <div
          className={`d-flex w-100 pt-4
            ${isMobile ? "flex-column" : "flex-row"}`}
        >
          <div
            className={`d-flex flex-column 
              ${isMobile ? "w-100" : "w-50"}`}
          >
            <div
              className={`text-light 
                ${isMobile ? "m-auto h1" : "h2"}`}
            >
              {actualState.vezetek_nev} {actualState.kereszt_nev}{" "}
              {UserService.getAge(actualState.szul_ido)}
            </div>
            <div
              className={`w-50 
                ${isMobile ? "m-auto mt-3" : ""}`}
            >
              <img
                src="profile_pic_def.jpg"
                style={{ width: "100%" }}
                alt="profile_pic"
              ></img>
            </div>
          </div>
          <div
            className={`text-light 
                ${isMobile ? "mt-5" : "ps-5"}`}
          >
            <div
              className={`d-flex justify-content-center 
                ${isMobile ? "m-auto mt-5 mb-5 w-100 h1" : "w-50 h2"}`}
            >
              Adatok
            </div>
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Vezetéknév:
              </div>
              {actualState.vezetek_nev_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
                    <input
                      className="w-100"
                      name="vezetek_nev"
                      value={actualState.vezetek_nev_tmp}
                      onChange={changeVezetekNevHandler}
                    />
                  </div>
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("vezetek_nev");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("vezetek_nev");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
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
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Keresztnév:
              </div>
              {actualState.kereszt_nev_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
                    <input
                      className="w-100"
                      name="vezetek_nev"
                      value={actualState.kereszt_nev_tmp}
                      onChange={changeKeresztNevHandler}
                    />
                  </div>
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("kereszt_nev");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("kereszt_nev");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
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
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Nem:
              </div>
              {actualState.nem_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`w-75
                      ${isMobile ? "h2" : "h6"}`}
                  >
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
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("nem");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("nem");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
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
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Születési hely, idő:
              </div>
              {actualState.szul_hely_ido_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`d-flex flex-column w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
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
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("szul_hely_ido");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("szul_hely_ido");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
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
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Irányítószám, város:
              </div>
              {actualState.iranyitoszam_varos_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`d-flex flex-column w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
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
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("iranyitoszam_varos");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("iranyitoszam_varos");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
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
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                E-mail:
              </div>
              {actualState.email_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
                    <input
                      className="w-100"
                      name="e-mail"
                      value={actualState.email_tmp}
                      onChange={changeEmailHandler}
                    />
                  </div>
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("e-mail");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("e-mail");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
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
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Jelszó:
              </div>
              {actualState.jelszo_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
                    <input
                      className="w-100"
                      name="jelszo"
                      value={actualState.jelszo_tmp}
                      onChange={changeJelszoHandler}
                    />
                  </div>
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("jelszo");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("jelszo");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
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
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Magasság:
              </div>
              {actualState.magassag_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
                    <input
                      type="number"
                      className="w-100"
                      name="magassag"
                      value={actualState.magassag_tmp}
                      onChange={changeMagassagHandler}
                    />
                  </div>
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("magassag");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("magassag");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
                  <div>{actualState.magassag + " cm"}</div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("magassag");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
            >
              <div
                className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
              >
                Testsúly:
              </div>
              {actualState.testsuly_input_visibility ? (
                <div className="d-flex">
                  <div
                    className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                  >
                    <input
                      type="number"
                      className="w-100"
                      name="testsuly"
                      value={actualState.testsuly_tmp}
                      onChange={changeTestsulyHandler}
                    />
                  </div>
                  <div
                    className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() => {
                        saveField("testsuly");
                      }}
                    />
                  </div>
                  <div
                    className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      onClick={() => {
                        clearChanges("testsuly");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                >
                  <div>{actualState.testsuly + " kg"}</div>
                  <div className="ms-1 crsrp">
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        changeField("testsuly");
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            {actualState.edzo && (
              <div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Kiket vállal:
                  </div>
                  {actualState.kiket_vallal_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <select
                          className="w-100"
                          name="kiket_vallal"
                          defaultValue="none"
                          onChange={changeKiketVallalHandler}
                        >
                          <option value="none" disabled hidden>
                            Válassz
                          </option>
                          <option value="ferfi">Férfi</option>
                          <option value="no">Nő</option>
                          <option value="mindenki">Mindenki</option>
                        </select>
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("kiket_vallal");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("kiket_vallal");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      <div>{actualState.kiket_vallal}</div>
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("kiket_vallal");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Specializáció:
                  </div>
                  {actualState.specializacio_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <input
                          className="w-100"
                          name="specializacio"
                          value={actualState.specializacio_tmp}
                          onChange={changeSpecializacioHandler}
                        />
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("specializacio");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("specializacio");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      <div>{actualState.specializacio}</div>
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("specializacio");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Végzettség:
                  </div>
                  {actualState.vegzettseg_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <input
                          className="w-100"
                          name="vegzettseg"
                          value={actualState.vegzettseg_tmp}
                          onChange={changeVegzettsegHandler}
                        />
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("vegzettseg");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("vegzettseg");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      <div>{actualState.vegzettseg}</div>
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("vegzettseg");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Hol:
                  </div>
                  {actualState.hol_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <input
                          className="w-100"
                          name="hol"
                          value={actualState.hol_tmp}
                          onChange={changeHolHandler}
                        />
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("hol");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("hol");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      <div>{actualState.hol}</div>
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("hol");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Online tréninget vállal:
                  </div>
                  {actualState.online_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-75
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <select
                          className="w-100"
                          name="nem"
                          defaultValue="none"
                          onChange={changeOnlineHandler}
                        >
                          <option value="none" disabled hidden>
                            Válassz
                          </option>
                          <option value="igen">Igen</option>
                          <option value="nem">Nem</option>
                        </select>
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("online");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("online");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      {actualState.online ? <div>Igen</div> : <div>Nem</div>}
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("online");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Tapasztalat:
                  </div>
                  {actualState.tapasztalat_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <input
                          className="w-100"
                          name="tapasztalat"
                          value={actualState.tapasztalat_tmp}
                          onChange={changeTapasztalatHandler}
                        />
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("tapasztalat");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("tapasztalat");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      <div>{actualState.tapasztalat}</div>
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("tapasztalat");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Telefonszám:
                  </div>
                  {actualState.telefonszam_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <input
                          type="number"
                          className="w-100"
                          name="telefonszam"
                          value={actualState.telefonszam_tmp}
                          onChange={changeTelefonszamHandler}
                        />
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("telefonszam");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("telefonszam");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      <div>{actualState.telefonszam}</div>
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("telefonszam");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Bemutatkozás:
                  </div>
                  {actualState.bemutatkozas_input_visibility ? (
                    <div className="d-flex">
                      <div
                        className={`w-50
                      ${isMobile ? "h2" : "h6"}`}
                      >
                        <textarea
                          className="w-100"
                          name="bemutatkozas"
                          value={actualState.bemutatkozas_tmp}
                          onChange={changeBemutatkozasHandler}
                        />
                      </div>
                      <div
                        className={`crsrp text-success
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => {
                            saveField("bemutatkozas");
                          }}
                        />
                      </div>
                      <div
                        className={`crsrp text-danger
                      ${isMobile ? "h1 me-2 ms-2" : "h6 ms-1"}`}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          onClick={() => {
                            clearChanges("bemutatkozas");
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                    >
                      <div>{actualState.bemutatkozas}</div>
                      <div className="ms-1 crsrp">
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => {
                            changeField("bemutatkozas");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex 
                ${isMobile ? "mb-3" : ""}`}
                >
                  <div
                    className={`me-2
                  ${isMobile ? "h2" : "h6"}`}
                  >
                    Hiteles:
                  </div>
                  <div
                    className={`d-flex 
                    ${isMobile ? "h2" : "h6"}`}
                  >
                    {actualState.hiteles ? (
                      <div className="text-success">{"Igen"}</div>
                    ) : (
                      <div className="text-danger">{"Nem"}</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
