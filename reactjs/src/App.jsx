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
import TrainersAndUsers from "./components/trainersAndUsers";
import LineWithTitle from "./components/lineWithTitle";

const App = (props) => {
  const [actualState, setNewState] = useState({
    isAuthenticated: false,
    keresztNev: "",
    id: "",
    admin: "",
    title: "",
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
          } else {
            handleLogout();
          }
        })
        .catch((error) => {
          console.error("Hiba történt az autentikáció során", error);
        });
    }
  }, []);

  return (
    <Router>
      <div className="sticky-top">
        <NavBar
          isAuthenticated={actualState.isAuthenticated}
          keresztNev={actualState.keresztNev}
          admin={actualState.admin}
          onLogout={handleLogout}
        />
        <LineWithTitle title={actualState.title} />
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/homePage" />
          </Route>
          <Route path="/homePage">
            <HomePage
              onInit={() => {
                setNewState({ ...actualState, title: "Kezdőlap" });
              }}
            />
          </Route>
          <Route path="/trainersPage">
            <TrainersPage
              onInit={() => {
                setNewState({ ...actualState, title: "Edzőink" });
              }}
            />
          </Route>
          <Route path="/calCalcPage">
            <CalCalcPage
              onInit={() => {
                setNewState({ ...actualState, title: "Kalória Kalkulátor" });
              }}
            />
          </Route>
          <Route path="/joinPage">
            <JoinPage
              onInit={() => {
                setNewState({ ...actualState, title: "Csatlakozz" });
              }}
            />
          </Route>
          <Route path="/aboutPage">
            <AboutPage
              onInit={() => {
                setNewState({ ...actualState, title: "Rólunk" });
              }}
            />
          </Route>
          <Route path="/loginPage">
            <LoginPage
              onInit={() => {
                setNewState({ ...actualState, title: "Bejelentkezés" });
              }}
              onLogin={handleLogin}
            />
          </Route>
          <Route path="/registerPage">
            <RegisterPage
              onInit={() => {
                setNewState({ ...actualState, title: "Regisztráció" });
              }}
            />
          </Route>
          <Route path="/profilePage">
            <ProfilePage
              onInit={() => {
                setNewState({ ...actualState, title: "Profil" });
              }}
              id={actualState.id}
            />
          </Route>
          <Route path="/adminPage">
            <AdminPage
              onInit={() => {
                setNewState({ ...actualState, title: "Admin menü" });
              }}
            />
          </Route>
          <Route path="/trainerApplications">
            <TrainersAndUsers
              onInit={() => {
                setNewState({ ...actualState, title: "Edző jelentkezések" });
              }}
              mode="applications"
              with="admin"
            />
          </Route>
          <Route path="/allTrainers">
            <TrainersAndUsers
              onInit={() => {
                setNewState({ ...actualState, title: "Összes edző" });
              }}
              mode="trainers"
              with="admin"
            />
          </Route>
          <Route path="/allUsers">
            <TrainersAndUsers
              onInit={() => {
                setNewState({ ...actualState, title: "Összes felhasználó" });
              }}
              mode="users"
              with="admin"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
