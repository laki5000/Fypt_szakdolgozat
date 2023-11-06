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
        alert("Sikeres regisztrációxd");
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
      <div className="divcol pddnglr1 pddngt1 tac bgisr mrgnlr1 pddngbt1 divjnregstr">
        <div className="divrow">
          <div className="mrgna wdth3 divfrmdta">
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Kiket vállalsz?
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <select
                className="pddng1 wdth1 fntsz1 brdrrds"
                name="nem"
                onChange={changeKiketVallal}
              >
                <option value="ferfi">Férfiak</option>
                <option value="no">Nők</option>
                <option value="mindketto">Mindkettő</option>
              </select>
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">Hol?</div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="hol"
                className="pddng1 wdth1 fntsz1 brdrrds"
                onChange={changeHol}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              <input type="checkbox" name="online" onChange={changeOnline} />
              Online tréninget vállalok!
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Specializáció
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="specializacio"
                className="pddng1 wdth1 fntsz1 brdrrds"
                onChange={changeSpecializacio}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Végzettség
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="vegzettseg"
                className="pddng1 wdth1 fntsz1 brdrrds"
                onChange={changeVegzettseg}
              />
            </div>
          </div>
          <div className="mrgna wdth3 divfrmdta">
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Tapasztalat
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="tapasztalat"
                className="pddng1 wdth1 fntsz1 brdrrds"
                onChange={changeTapasztalat}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Telefonszám
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                type="number"
                className="pddng1 wdth1 fntsz1 brdrrds"
                name="telefonszam"
                onChange={changeTelefonszam}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Bemutatkozás
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <textarea
                className="pddng1 wdth1 fntsz1 brdrrds textarea1"
                onChange={changeBemutatkozas}
              />
            </div>
            <div className="divrow divlft">Minden mező kitöltése kötelező!</div>
          </div>
        </div>
        <div className="divregbtnprnt">
          <div className="divrow jcc mrgna wdth2 hvr2 divsubmit">
            <input
              type="button"
              value="Regisztráció"
              className="bgclr1 crsrp fntsz1 brdrrds sbmtbtn"
              onClick={saveTrainer}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default withRouter(JoinForm);
