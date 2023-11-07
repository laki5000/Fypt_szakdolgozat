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
          alert("Sikeres regisztráció!");
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
      <div className="d-flex flex-column bg-dark">
        <div className="d-flex m-auto w-50">
          <div className="w-100 pt-4">
            <div className="pt-2 h4 text-light px-3 w-75">Vezetéknév*</div>
            <div className="w-75">
              <input
                name="vezetek_nev"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.vezetek_nev}
                onChange={changeVezetekNevHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Keresztnév*</div>
            <div className="w-75">
              <input
                name="kereszt_nev"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.kereszt_nev}
                onChange={changeKeresztNevHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Nem</div>
            <div className="w-75">
              <select
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                name="nem"
                onChange={changeNemHandler}
              >
                <option value="ferfi">Férfi</option>
                <option value="no">Nő</option>
              </select>
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Születési idő</div>
            <div className="w-75">
              <input
                type="date"
                name="szul_ido"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.szul_ido}
                onChange={changeSzulidoHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Születési hely</div>
            <div className="w-75">
              <input
                name="szul_hely"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.szul_hely}
                onChange={changeSzulHelyHandler}
              />
            </div>
          </div>
          <div className="d-flex flex-column w-100 pt-4 align-items-end">
            <div className="pt-2 h4 text-light px-3 w-75">Irányítószám</div>
            <div className="w-75">
              <input
                type="number"
                name="iranyitoszam"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.iranyitoszam}
                onChange={changeIranyitoszamHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Város</div>
            <div className="w-75">
              <input
                name="lakhely_varos"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.lakhely_varos}
                onChange={changeLakhelyVarosHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">E-mail*</div>
            <div className="w-75">
              <input
                name="email"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.email}
                onChange={changeEmailHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">
              E-mail mégegyszer*
            </div>
            <div className="w-75">
              <input
                name="email2"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.email_megegyszer}
                onChange={changeEmailMegegyszerHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">Jelszó*</div>
            <div className="w-75">
              <input
                type="password"
                name="jelszo"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.jelszo}
                onChange={changeJelszoHandler}
              />
            </div>
            <div className="pt-2 h4 text-light px-3 w-75">
              Jelszó mégegyszer*
            </div>
            <div className="w-75">
              <input
                type="password"
                name="jelszo2"
                className="pt-2 pb-2 rounded-4 px-3 w-100"
                value={actualState.jelszo_megegyszer}
                onChange={changeJelszoMegegyszerHandler}
              />
            </div>
          </div>
        </div>
        <div className="d-flex m-auto w-50 pt-5 pb-4">
          <div className="d-flex flex-column w-50 text-light">
            <div>Már van fiókod?</div>
            <div>
              <Link to="/loginPage">Jelentkezz be!</Link>
            </div>
          </div>
          <div className="d-flex flex-row-reverse m-auto w-50">
            <input
              type="button"
              value="Regisztráció"
              className="w-50 pt-3 pb-3 bg-primary h6 text-light"
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
