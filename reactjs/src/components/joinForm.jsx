import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import TrainerService from "../services/trainerService";
import UserService from "../services/userService";

const JoinForm = (props) => {
  const history = useHistory();

  const [actualState, setNewState] = useState({
    kiket_vallal: "Férfi",
    specializacio: "",
    vegzettseg: "",
    hol: "",
    online: false,
    tapasztalat: "",
    telefonszam: "",
    bemutatkozas: "",
    user_id: "",
    hiteles: false,
  });

  const changeKiketVallal = (event) => {
    if (event.target.value === "ferfi") {
      setNewState({ ...actualState, kiket_vallal: "Férfi" });
    } else if (event.target.value === "no") {
      setNewState({ ...actualState, kiket_vallal: "Nő" });
    } else {
      setNewState({ ...actualState, kiket_vallal: "Mindkettő" });
    }
  };

  const changeSpecializacio = (event) => {
    setNewState({ ...actualState, specializacio: event.target.value });
  };

  const changeVegzettseg = (event) => {
    setNewState({ ...actualState, vegzettseg: event.target.value });
  };

  const changeHol = (event) => {
    setNewState({ ...actualState, hol: event.target.value });
  };

  const changeOnline = () => {
    if (actualState.online) {
      setNewState({ ...actualState, online: false });
    } else {
      setNewState({ ...actualState, online: true });
    }
  };

  const changeTapasztalat = (event) => {
    setNewState({ ...actualState, tapasztalat: event.target.value });
  };

  const changeTelefonszam = (event) => {
    setNewState({ ...actualState, telefonszam: event.target.value });
  };

  const changeBemutatkozas = (event) => {
    setNewState({ ...actualState, bemutatkozas: event.target.value });
  };

  const saveTrainer = (e) => {
    e.preventDefault();
    if (
      actualState.specializacio === "" ||
      actualState.vegzettseg === "" ||
      actualState.tapasztalat === "" ||
      actualState.telefonszam === "" ||
      actualState.bemutatkozas === ""
    ) {
      alert("Minden mező kitöltése kötelező!");
    } else {
      let trainer = {
        kiketVallal: actualState.kiket_vallal,
        specializacio: actualState.specializacio,
        vegzettseg: actualState.vegzettseg,
        hol: actualState.hol,
        online: actualState.online,
        tapasztalat: actualState.tapasztalat,
        telefonszam: actualState.telefonszam,
        bemutatkozas: actualState.bemutatkozas,
        userId: actualState.user_id,
        hiteles: actualState.hiteles,
      };
      TrainerService.saveTrainer(trainer).then((res) => {
        alert("Sikeres regisztráció!");
        history.push("/homePage");
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    if (token && id) {
      UserService.authUser(token).then((res) => {
        if (res) {
          TrainerService.getTrainerByUserId(id).then((res) => {
            if (res.data) {
              history.push("/homePage");
            }
          });
        }
      });
    } else {
      history.push("/loginPage");
    }
    setNewState({ ...actualState, user_id: id });
  }, []);

  return (
    <form>
      <div className="d-flex flex-column bg-dark">
        <div className="d-flex m-auto w-50">
          <div className="w-100 pt-4">
            <div className="pt-2 h4 text-light px-3 w-75">Kiket vállalsz?</div>
            <div className="w-75">
              <select
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                name="nem"
                onChange={changeKiketVallal}
              >
                <option value="ferfi">Férfiak</option>
                <option value="no">Nők</option>
                <option value="mindketto">Mindkettő</option>
              </select>
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Hol?</div>
            <div className="w-75">
              <input
                name="hol"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                onChange={changeHol}
              />
            </div>
            <div className="d-flex pt-2 h5 text-light pe-3 ps-1 w-75">
              <input
                type="checkbox"
                name="online"
                className="me-2"
                onChange={changeOnline}
              />
              <div>Online tréninget vállalok!</div>
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Specializáció</div>
            <div className="w-75">
              <input
                name="specializacio"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                onChange={changeSpecializacio}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Végzettség</div>
            <div className="w-75">
              <input
                name="vegzettseg"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                onChange={changeVegzettseg}
              />
            </div>
          </div>
          <div className="d-flex flex-column w-100 pt-4 align-items-end">
            <div className="pt-2 h4 text-light px-3 w-75">Tapasztalat</div>
            <div className="w-75">
              <input
                name="tapasztalat"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                onChange={changeTapasztalat}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Telefonszám</div>
            <div className="w-75">
              <input
                type="number"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                name="telefonszam"
                onChange={changeTelefonszam}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Bemutatkozás</div>
            <div className="w-75">
              <textarea
                rows="4"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                onChange={changeBemutatkozas}
              />
            </div>
            <div className="w-75">
              <div className="d-flex text-light">
                Minden mező kitöltése kötelező!
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse m-auto w-50 pt-5 pb-4">
          <div className="d-flex flex-row-reverse w-50">
            <input
              type="button"
              value="Regisztráció"
              className="w-50 pt-3 pb-3 bg-primary h5 text-light"
              onClick={saveTrainer}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default withRouter(JoinForm);
