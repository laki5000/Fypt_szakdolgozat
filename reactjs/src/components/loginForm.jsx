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
        alert("Sikeres bejelentkezés!");
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
      <div className="d-flex bg-dark">
        <div className="d-flex flex-column mx-auto pt-5 pb-5 w-25">
          <div>
            <img
              className="d-flex mx-auto w-75"
              src="dumbell_icon.jpg"
              alt="logo"
            ></img>
          </div>
          <div className="d-flex mx-auto w-75 pt-5 h1 px-4 text-light">
            E-MAIL
          </div>
          <div className="d-flex mx-auto w-75 h2">
            <input
              name="email"
              className="d-flex w-100 pt-2 pb-2 px-4 rounded-4"
              value={actualState.email}
              onChange={changeEmailHandler}
            />
          </div>
          <div className="d-flex mx-auto w-75 pt-5 h1 px-4 text-light">
            JELSZÓ
          </div>
          <div className="d-flex mx-auto w-75 h2">
            <input
              type="password"
              className="d-flex w-100 pt-2 pb-2 px-4 rounded-4"
              name="jelszo"
              value={actualState.jelszo}
              onChange={changeJelszoHandler}
            />
          </div>
          <div className="d-flex flex-column w-75 mx-5 px-3 pt-1 pb-2 text-light">
            <div>Még nem regisztráltál?</div>
            <div>
              <Link to="/registerPage">Kattints ide!</Link>
            </div>
          </div>
          <div className="d-flex flex-row-reverse">
            <input
              type="button"
              value="Bejelentkezés"
              className="w-50 pt-3 pb-3 bg-primary h6 text-light"
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
