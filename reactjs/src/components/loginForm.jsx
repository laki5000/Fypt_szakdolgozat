import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import UserService from "../services/userService";

const LoginForm = (props) => {
  const history = useHistory();

  const [actualState, setNewState] = useState({
    email: "",
    jelszo: "",
  });

  const loginUser = () => {
    let user = {
      eMail: actualState.email,
      jelszo: actualState.jelszo,
    };
    UserService.loginUser(user).then((res) => {
      if (res.data[0]) {
        localStorage.setItem("token", res.data[0]);
        localStorage.setItem("id", res.data[1]);
        localStorage.setItem("keresztnev", res.data[2]);
        props.onLogin(res.data[1], res.data[2]);
        alert("Sikeres bejelentkezésxd");
        history.push("homePage");
      } else {
        alert("Hibás felhasználónév vagy jelszó!");
      }
    });
  };

  const changeEmailHandler = (event) => {
    setNewState({ ...actualState, email: event.target.value });
  };

  const changeJelszoHandler = (event) => {
    setNewState({ ...actualState, jelszo: event.target.value });
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
      <div className="divcol tac bgisr mrgnlr1 pddngbt1 divlgn">
        <div className="mrgna wdth3 divfrmdta">
          <div>
            <img className="wdth3" src="dumbell_icon.jpg" alt="logo"></img>
          </div>
          <div className="mrgna fntsz2 wdth2 divfrmdta_titles">E-MAIL</div>
          <div className="mrgna fntsz2 wdth2 hvr2">
            <input
              name="email"
              className="pddng1 wdth1 fntsz1 brdrrds"
              value={actualState.email}
              onChange={changeEmailHandler}
            />
          </div>
          <div className="mrgna fntsz2 wdth2 divfrmdta_titles">JELSZÓ</div>
          <div className="mrgna fntsz2 wdth2 hvr2">
            <input
              type="password"
              className="pddng1 wdth1 fntsz1 brdrrds"
              name="jelszo"
              value={actualState.jelszo}
              onChange={changeJelszoHandler}
            />
          </div>
          <div className="divcol pddngt1 mrgna wdth2 divnotregisteredyet">
            <div>Még nem regisztráltál?</div>
            <div>
              <Link to="/registerPage">Kattints ide!</Link>
            </div>
          </div>
          <div className="mrgna wdth2 hvr2 divsubmit">
            <input
              type="button"
              value="Bejelentkezés"
              className="bgclr1 crsrp fntsz1 brdrrds sbmtbtn"
              onClick={() => {
                loginUser();
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default withRouter(LoginForm);
