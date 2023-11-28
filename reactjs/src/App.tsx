import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "./components/NavBar.tsx";
import Line from "./components/Line.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import TrainersPage from "./pages/TrainersPage.tsx";
import JoinPage from "./pages/JoinPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import UserService from "./services/UserService.ts";
import Footer from "./components/Footer.tsx";
import TrainerService from "./services/TrainerService.ts";

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isTrainer, setIsTrainer] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [snackBarVisibility, setSnackBarVisibility] = React.useState({
    message: "",
    err: false,
    success: false,
  });

  const [actualState, setNewState] = React.useState({
    token: "",
    userid: "",
  });

  const handleCloseAlert = () => {
    setSnackBarVisibility({
      ...snackBarVisibility,
      message: "",
      err: false,
      success: false,
    });
  };

  const handleOpenAlert = (type) => {
    switch (type) {
      case "err1":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Minden mező kitöltése kötelező!",
          err: true,
        });
        break;
      case "err2":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "A két email nem egyezik!",
          err: true,
        });
        break;
      case "err3":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "A két jelszó nem egyezik!",
          err: true,
        });
        break;
      case "err4":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Hibás e-mail formátum!",
          err: true,
        });
        break;
      case "err5":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "A jelszónak legalább 6 karakter hosszúnak kell lennie!",
          err: true,
        });
        break;
      case "err6":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Ez az e-mail cím már foglalt!",
          err: true,
        });
        break;
      case "err7":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Hibás e-mail vagy jelszó!",
          err: true,
        });
        break;
      case "err8":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Már jelentkeztél edzőnek!",
          err: true,
        });
        break;
      case "err9":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "A kép feltöltése sikertelen volt!",
          err: true,
        });
        break;
      case "success1":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Sikeres regisztráció!",
          success: true,
        });
        break;
      case "success2":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Sikeres bejelentkezés!",
          success: true,
        });
        break;
      case "success3":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "Sikeresen megváltoztattad az adataidat",
          success: true,
        });
        break;
      case "success4":
        setSnackBarVisibility({
          ...snackBarVisibility,
          message: "A kép feltöltése sikeres volt!",
          success: true,
        });
        break;
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({
        ...snackBarVisibility,
        message: "",
        err: false,
        success: false,
      });
    }, 3000);
  }, [snackBarVisibility]);

  React.useEffect(() => {
    const token_tmp = localStorage.getItem("token");
    if (token_tmp) {
      UserService.authUser(token_tmp).then((res) => {
        if (res.data) {
          setIsLoggedIn(true);
          setNewState({
            userid: res.data,
            token: token_tmp,
          });

          TrainerService.getTrainerByUserid(res.data).then((res) => {
            if (res.data.content.length > 0) {
              setIsTrainer(true);
            }
          });
        } else {
          localStorage.removeItem("token");
          setIsTrainer(false);
        }
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  }, []);

  return (
    <Router>
      <Snackbar open={snackBarVisibility.err}>
        <Alert
          onClose={() => {
            handleCloseAlert();
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackBarVisibility.message}
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.success}>
        <Alert
          onClose={() => {
            handleCloseAlert();
          }}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackBarVisibility.message}
        </Alert>
      </Snackbar>
      <NavBar
        setIsLoggedIn={() => {
          setIsLoggedIn(false);
        }}
        setNewState={() => {
          setNewState({ userid: "", token: "" });
        }}
        setIsTrainer={() => {
          setIsTrainer(false);
        }}
        openAlert={(type) => {
          handleOpenAlert(type);
        }}
        isLoggedIn={isLoggedIn}
        isTrainer={isTrainer}
        userid={actualState.userid}
      />
      <Line />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/login">
          <LoginPage
            setIsLoggedIn={() => {
              setIsLoggedIn(true);
            }}
            openAlert={(type) => {
              handleOpenAlert(type);
            }}
            setNewState={(userid, token) => {
              setNewState({ userid: userid, token: token });
            }}
            isLoggedIn={isLoggedIn}
            setIsTrainer={() => {
              setIsTrainer(true);
            }}
          />
        </Route>
        <Route path="/register">
          <RegisterPage
            openAlert={(type) => {
              handleOpenAlert(type);
            }}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/trainers">
          <TrainersPage />
        </Route>
        <Route path="/join">
          <JoinPage
            openAlert={(type) => {
              handleOpenAlert(type);
            }}
            userid={actualState.userid}
            isTrainer={isTrainer}
          />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/profile">
          {isLoading ? (
            <Box
              sx={{ p: 25 }}
              style={{
                backgroundColor: "#332D2D",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box>
              {isLoggedIn ? (
                <ProfilePage
                  userid={actualState.userid}
                  isLoggedIn={isLoggedIn}
                  isTrainer={isTrainer}
                  openAlert={(type) => {
                    handleOpenAlert(type);
                  }}
                  setIsLoggedIn={() => {
                    setIsLoggedIn(false);
                  }}
                  setNewState={() => {
                    setNewState({ userid: "", token: "" });
                  }}
                  setIsTrainer={() => {
                    setIsTrainer(false);
                  }}
                />
              ) : (
                <LoginPage
                  setIsLoggedIn={() => {
                    setIsLoggedIn(true);
                  }}
                  openAlert={(type) => {
                    handleOpenAlert(type);
                  }}
                  setNewState={(userid, token) => {
                    setNewState({ userid: userid, token: token });
                  }}
                  isLoggedIn={isLoggedIn}
                  setIsTrainer={() => {
                    setIsTrainer(true);
                  }}
                />
              )}
            </Box>
          )}
        </Route>
      </Switch>
      <Footer
        openAlert={(type) => {
          handleOpenAlert(type);
        }}
        setIsTrainer={() => {
          setIsTrainer(false);
        }}
        userid={actualState.userid}
        isTrainer={isTrainer}
        isLoggedIn={isLoggedIn}
      />
    </Router>
  );
};
export default App;
