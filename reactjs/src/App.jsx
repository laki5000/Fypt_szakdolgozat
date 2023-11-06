import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/navBar";
import HomePage from "./pages/homePage";
import TrainersPage from "./pages/trainersPage";
import CalCalcPage from "./pages/calCalcPage";
import JoinPage from "./pages/joinPage";
import AboutPage from "./pages/aboutPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProfilePage from "./pages/profilePage";
import UserService from "./services/userService";
import AdminService from "./services/adminService";
import AdminPage from "./pages/adminPage";
import TrainerApplications from "./components/trainerApplications";

const App = (props) => {
  const [actualState, setNewState] = useState({
    isAuthenticated: false,
    keresztNev: "",
    id: "",
    admin: "",
  });

  const handleLogin = (id, keresztnev) => {
    setNewState({
      isAuthenticated: true,
      id: id,
      keresztNev: keresztnev,
    });
    checkIsAdmin(id);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("keresztnev");
    setNewState({
      isAuthenticated: false,
      id: "",
      keresztNev: "",
      admin: false,
    });
  };

  const checkIsAdmin = (user_id) => {
    AdminService.getAdmindata(user_id).then((response) => {
      if (response.data) {
        setNewState({ admin: true });
      }
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      UserService.authUser(token)
        .then((response) => {
          if (response.data) {
            const id = localStorage.getItem("id");
            setNewState({
              isAuthenticated: true,
              id: id,
              keresztNev: localStorage.getItem("keresztnev"),
            });
            checkIsAdmin(id);
          }
        })
        .catch((error) => {
          console.error("Hiba történt az autentikáció során", error);
        });
    }
  }, []);

  return (
    <Router>
      <div>
        <NavBar
          isAuthenticated={actualState.isAuthenticated}
          keresztNev={actualState.keresztNev}
          admin={actualState.admin}
          onLogout={handleLogout}
        />
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/homePage" />
          </Route>
          <Route path="/homePage">
            <HomePage />
          </Route>
          <Route path="/trainersPage">
            <TrainersPage />
          </Route>
          <Route path="/calCalcPage">
            <CalCalcPage />
          </Route>
          <Route path="/joinPage">
            <JoinPage />
          </Route>
          <Route path="/aboutPage">
            <AboutPage />
          </Route>
          <Route path="/loginPage">
            <LoginPage onLogin={handleLogin} />
          </Route>
          <Route path="/registerPage">
            <RegisterPage />
          </Route>
          <Route path="/profilePage">
            <ProfilePage id={actualState.id} />
          </Route>
          <Route path="/adminPage">
            <AdminPage />
          </Route>
          <Route path="/trainerApplications">
            <TrainerApplications />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
