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

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [snackBarVisibility, setSnackBarVisibility] = React.useState({
    err1: false,
    err2: false,
    err3: false,
    err4: false,
    err5: false,
    err6: false,
    err7: false,
    err8: false,
    success1: false,
    success2: false,
  });

  const [actualState, setNewState] = React.useState({
    token: "",
    userid: "",
  });

  const handleCloseAlert = (type) => {
    switch (type) {
      case "err1":
        setSnackBarVisibility({ ...snackBarVisibility, err1: false });
        break;
      case "err2":
        setSnackBarVisibility({ ...snackBarVisibility, err2: false });
        break;
      case "err3":
        setSnackBarVisibility({ ...snackBarVisibility, err3: false });
        break;
      case "err4":
        setSnackBarVisibility({ ...snackBarVisibility, err4: false });
        break;
      case "err5":
        setSnackBarVisibility({ ...snackBarVisibility, err5: false });
        break;
      case "err6":
        setSnackBarVisibility({ ...snackBarVisibility, err6: false });
        break;
      case "err7":
        setSnackBarVisibility({ ...snackBarVisibility, err7: false });
        break;
      case "err8":
        setSnackBarVisibility({ ...snackBarVisibility, err8: false });
        break;
      case "success1":
        setSnackBarVisibility({ ...snackBarVisibility, success1: false });
        break;
      case "success2":
        setSnackBarVisibility({ ...snackBarVisibility, success2: false });
        break;
    }
  };

  const handleOpenAlert = (type) => {
    switch (type) {
      case "err1":
        setSnackBarVisibility({ ...snackBarVisibility, err1: true });
        break;
      case "err2":
        setSnackBarVisibility({ ...snackBarVisibility, err2: true });
        break;
      case "err3":
        setSnackBarVisibility({ ...snackBarVisibility, err3: true });
        break;
      case "err4":
        setSnackBarVisibility({ ...snackBarVisibility, err4: true });
        break;
      case "err5":
        setSnackBarVisibility({ ...snackBarVisibility, err5: true });
        break;
      case "err6":
        setSnackBarVisibility({ ...snackBarVisibility, err6: true });
        break;
      case "err7":
        setSnackBarVisibility({ ...snackBarVisibility, err7: true });
        break;
      case "err8":
        setSnackBarVisibility({ ...snackBarVisibility, err8: true });
        break;
      case "success1":
        setSnackBarVisibility({ ...snackBarVisibility, success1: true });
        break;
      case "success2":
        setSnackBarVisibility({ ...snackBarVisibility, success2: true });
        break;
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err1: false });
    }, 3000);
  }, [snackBarVisibility.err1]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err2: false });
    }, 3000);
  }, [snackBarVisibility.err2]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err3: false });
    }, 3000);
  }, [snackBarVisibility.err3]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err4: false });
    }, 3000);
  }, [snackBarVisibility.err4]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err5: false });
    }, 3000);
  }, [snackBarVisibility.err5]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err6: false });
    }, 3000);
  }, [snackBarVisibility.err6]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err7: false });
    }, 3000);
  }, [snackBarVisibility.err7]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, err8: false });
    }, 3000);
  }, [snackBarVisibility.err8]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, success1: false });
    }, 3000);
  }, [snackBarVisibility.success1]);

  React.useEffect(() => {
    setTimeout(() => {
      setSnackBarVisibility({ ...snackBarVisibility, success2: false });
    }, 3000);
  }, [snackBarVisibility.success2]);

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
        } else {
          localStorage.removeItem("token");
        }
      });
    }
  }, []);

  return (
    <Router>
      <Snackbar open={snackBarVisibility.err1}>
        <Alert
          onClose={() => {
            handleCloseAlert("err1");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          Minden mező kitöltése kötelező!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err2}>
        <Alert
          onClose={() => {
            handleCloseAlert("err2");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          A két email nem egyezik!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err3}>
        <Alert
          onClose={() => {
            handleCloseAlert("err3");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          A két jelszó nem egyezik!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err4}>
        <Alert
          onClose={() => {
            handleCloseAlert("err4");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          Hibás e-mail formátum!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err5}>
        <Alert
          onClose={() => {
            handleCloseAlert("err5");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          A jelszónak legalább 6 karakter hosszúnak kell lennie!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err6}>
        <Alert
          onClose={() => {
            handleCloseAlert("err6");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          Ez az e-mail cím már foglalt!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err7}>
        <Alert
          onClose={() => {
            handleCloseAlert("err7");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          Hibás e-mail vagy jelszó!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err8}>
        <Alert
          onClose={() => {
            handleCloseAlert("err8");
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          Már jelentkeztél edzőnek!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.success1}>
        <Alert
          onClose={() => {
            handleCloseAlert("success1");
          }}
          severity="success"
          sx={{ width: "100%" }}
        >
          Sikeres regisztráció!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.success2}>
        <Alert
          onClose={() => {
            handleCloseAlert("success2");
          }}
          severity="success"
          sx={{ width: "100%" }}
        >
          Sikeres bejelentkezés!
        </Alert>
      </Snackbar>
      <NavBar
        setIsLoggedIn={() => {
          setIsLoggedIn(false);
        }}
        setNewState={() => {
          setNewState({ userid: "", token: "" });
        }}
        openAlert={(type) => {
          handleOpenAlert(type);
        }}
        isLoggedIn={isLoggedIn}
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
          />
        </Route>
        <Route path="/register">
          <RegisterPage
            openAlert={(type) => {
              handleOpenAlert(type);
            }}
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
          />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/profile">
          {isLoggedIn ? (
            <ProfilePage userid={actualState.userid} isLoggedIn={isLoggedIn} />
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
            />
          )}
        </Route>
      </Switch>
      <Footer
        openAlert={(type) => {
          handleOpenAlert(type);
        }}
        userid={actualState.userid}
      />
    </Router>
  );
};
export default App;
