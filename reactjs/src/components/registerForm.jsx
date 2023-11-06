import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import UserService from "../services/userService";

const RegisterForm = (props) => {
  const history = useHistory();

  const [actualState, setNewState] = useState({
    vezetek_nev: "",
    kereszt_nev: "",
    nem: "Férfi",
    szul_hely: "",
    szul_ido: "",
    iranyitoszam: "",
    lakhely_varos: "",
    email: "",
    email_megegyszer: "",
    jelszo: "",
    jelszo_megegyszer: "",
  });

  const changeVezetekNevHandler = (event) => {
    setNewState({ ...actualState, vezetek_nev: event.target.value });
  };

  const changeKeresztNevHandler = (event) => {
    setNewState({ ...actualState, kereszt_nev: event.target.value });
  };

  const changeNemHandler = (event) => {
    if (event.target.value === "ferfi") {
      setNewState({ ...actualState, nem: "Férfi" });
    } else if (event.target.value === "no") {
      setNewState({ ...actualState, nem: "Nő" });
    }
  };

  const changeSzulHelyHandler = (event) => {
    setNewState({ ...actualState, szul_hely: event.target.value });
  };

  const changeSzulidoHandler = (event) => {
    setNewState({ ...actualState, szul_ido: event.target.value });
  };

  const changeIranyitoszamHandler = (event) => {
    setNewState({ ...actualState, iranyitoszam: event.target.value });
  };

  const changeLakhelyVarosHandler = (event) => {
    setNewState({ ...actualState, lakhely_varos: event.target.value });
  };

  const changeEmailHandler = (event) => {
    setNewState({ ...actualState, email: event.target.value });
  };

  const changeEmailMegegyszerHandler = (event) => {
    setNewState({ ...actualState, email_megegyszer: event.target.value });
  };

  const changeJelszoHandler = (event) => {
    setNewState({ ...actualState, jelszo: event.target.value });
  };

  const changeJelszoMegegyszerHandler = (event) => {
    setNewState({ ...actualState, jelszo_megegyszer: event.target.value });
  };

  const saveUser = () => {
    if (
      actualState.vezetek_nev === "" ||
      actualState.kereszt_nev === "" ||
      actualState.email === "" ||
      actualState.email_megegyszer === "" ||
      actualState.jelszo === "" ||
      actualState.jelszo_megegyszer === ""
    ) {
      alert("A csillaggal jelölt mezők kitöltése kötelező!");
    } else if (actualState.email !== actualState.email_megegyszer) {
      alert("A két e-mail nem egyezik!");
    } else if (actualState.jelszo !== actualState.jelszo_megegyszer) {
      alert("A két jelszó nem egyezik!");
    } else if (
      !actualState.email.includes("@") ||
      !actualState.email.includes(".")
    ) {
      alert("Hibás email formátum");
    } else if (actualState.jelszo.length < 6) {
      alert("A jelszónak minimum 6 karakterből kell állnia!");
    } else {
      UserService.getUserdataByEmail(actualState.email).then((res) => {
        if (res.data) {
          alert("Ezzel az e-mail címmel már beregisztráltak!");
        } else {
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
          };
          UserService.saveUser(user);
          alert("Sikeres regisztrációxd");
          history.push("/loginPage");
        }
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      UserService.authUser(token).then((res) => {
        if (res.data) {
          history.push("/homePage");
        }
      });
    }
  }, []);

  return (
    <form>
      <div className="divcol pddnglr1 pddngt1 tac bgisr mrgnlr1 pddngbt1 divjnregstr">
        <div className="divrow">
          <div className="mrgna wdth3 divfrmdta">
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Vezetéknév*
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="vezetek_nev"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.vezetek_nev}
                onChange={changeVezetekNevHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Keresztnév*
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="kereszt_nev"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.kereszt_nev}
                onChange={changeKeresztNevHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">Nem</div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <select
                className="pddng1 wdth1 fntsz1 brdrrds"
                name="nem"
                onChange={changeNemHandler}
              >
                <option value="ferfi">Férfi</option>
                <option value="no">Nő</option>
              </select>
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Születési hely
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="szul_hely"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.szul_hely}
                onChange={changeSzulHelyHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Születési idő
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                type="date"
                name="szul_ido"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.szul_ido}
                onChange={changeSzulidoHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Irányítószám
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                type="number"
                name="iranyitoszam"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.iranyitoszam}
                onChange={changeIranyitoszamHandler}
              />
            </div>
          </div>
          <div className="mrgna wdth3 divfrmdta">
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">Város</div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="lakhely_varos"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.lakhely_varos}
                onChange={changeLakhelyVarosHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">E-mail*</div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="email"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.email}
                onChange={changeEmailHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              E-mail mégegyszer*
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                name="email2"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.email_megegyszer}
                onChange={changeEmailMegegyszerHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">Jelszó*</div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                type="password"
                name="jelszo"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.jelszo}
                onChange={changeJelszoHandler}
              />
            </div>
            <div className="mrgna fntsz1 wdth2 divfrmdta_titles">
              Jelszó mégegyszer*
            </div>
            <div className="mrgna fntsz1 wdth2 hvr2">
              <input
                type="password"
                name="jelszo2"
                className="pddng1 wdth1 fntsz1 brdrrds"
                value={actualState.jelszo_megegyszer}
                onChange={changeJelszoMegegyszerHandler}
              />
            </div>
          </div>
        </div>
        <div className="divrow divregbtnprnt">
          <div className="divcol pddngt1 mrgna wdth2 divnotregisteredyet">
            <div>Már van fiókod?</div>
            <div>
              <Link to="/loginPage">Jelentkezz be!</Link>
            </div>
          </div>
          <div className="mrgna wdth2 hvr2 divsubmit">
            <input
              type="button"
              value="Regisztráció"
              className="bgclr1 crsrp fntsz1 brdrrds sbmtbtn"
              onClick={() => {
                saveUser();
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default withRouter(RegisterForm);
