import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import UserService from "../services/UserService.ts";

const RegisterForm = (props) => {
  const [actualState, setNewState] = React.useState({
    lastname: "",
    firstname: "",
    gender: "",
    birthplace: "",
    dateofbirth: "",
    city: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
  });

  const [snackBarVisibility, setSnackBarVisibility] = React.useState({
    err1: false,
    err2: false,
    err3: false,
    err4: false,
    err5: false,
    err6: false,
    success: false,
  });

  const handleLastNameChanged = (event) => {
    setNewState({ ...actualState, lastname: event.target.value });
  };

  const handleFirstNameChanged = (event) => {
    setNewState({ ...actualState, firstname: event.target.value });
  };

  const handleGenderChanged = (event) => {
    setNewState({ ...actualState, gender: event.target.value });
  };

  const handleBirthPlaceChanged = (event) => {
    setNewState({ ...actualState, birthplace: event.target.value });
  };

  const handleDateOfBirthChanged = (event) => {
    setNewState({ ...actualState, dateofbirth: event.target.value });
  };

  const handleCityChanged = (event) => {
    setNewState({ ...actualState, city: event.target.value });
  };

  const handleEmailChanged = (event) => {
    setNewState({ ...actualState, email: event.target.value });
  };

  const handleEmail2Changed = (event) => {
    setNewState({ ...actualState, email2: event.target.value });
  };

  const handlePasswordChanged = (event) => {
    setNewState({ ...actualState, password: event.target.value });
  };

  const handlePassword2Changed = (event) => {
    setNewState({ ...actualState, password2: event.target.value });
  };

  const handleCloseErr1 = () => {
    setSnackBarVisibility({ ...snackBarVisibility, err1: false });
  };

  const handleCloseErr2 = () => {
    setSnackBarVisibility({ ...snackBarVisibility, err2: false });
  };

  const handleCloseErr3 = () => {
    setSnackBarVisibility({ ...snackBarVisibility, err3: false });
  };

  const handleCloseErr4 = () => {
    setSnackBarVisibility({ ...snackBarVisibility, err4: false });
  };

  const handleCloseErr5 = () => {
    setSnackBarVisibility({ ...snackBarVisibility, err5: false });
  };

  const handleCloseErr6 = () => {
    setSnackBarVisibility({ ...snackBarVisibility, err6: false });
  };

  const handleCloseSuccess = () => {
    setSnackBarVisibility({ ...snackBarVisibility, success: false });
  };

  const handleSubmit = () => {
    if (
      actualState.lastname &&
      actualState.firstname &&
      actualState.gender &&
      actualState.birthplace &&
      actualState.dateofbirth &&
      actualState.city &&
      actualState.email &&
      actualState.email2 &&
      actualState.password &&
      actualState.password2
    ) {
      if (actualState.email === actualState.email2) {
        if (actualState.password === actualState.password2) {
          if (
            actualState.email.includes("@") &&
            actualState.email.includes(".")
          ) {
            if (actualState.password.length >= 6) {
              UserService.getUserByEmail(actualState.email).then((res) => {
                if (res.data.content.length > 0) {
                  setSnackBarVisibility({ ...snackBarVisibility, err6: true });
                } else {
                  let user = {
                    lastname: actualState.lastname,
                    firstname: actualState.firstname,
                    gender: actualState.gender,
                    birthplace: actualState.birthplace,
                    dateofbirth: actualState.dateofbirth,
                    city: actualState.city,
                    email: actualState.email,
                    password: actualState.password,
                  };
                  UserService.saveUser(user).then((res) => {
                    if (res.data) {
                      setSnackBarVisibility({
                        ...snackBarVisibility,
                        success: true,
                      });
                      setNewState({
                        lastname: "",
                        firstname: "",
                        gender: "",
                        birthplace: "",
                        dateofbirth: "",
                        city: "",
                        email: "",
                        email2: "",
                        password: "",
                        password2: "",
                      });
                    }
                  });
                }
              });
            } else {
              setSnackBarVisibility({ ...snackBarVisibility, err5: true });
            }
          } else {
            setSnackBarVisibility({ ...snackBarVisibility, err4: true });
          }
        } else {
          setSnackBarVisibility({ ...snackBarVisibility, err3: true });
        }
      } else {
        setSnackBarVisibility({ ...snackBarVisibility, err2: true });
      }
    } else {
      setSnackBarVisibility({ ...snackBarVisibility, err1: true });
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
      setSnackBarVisibility({ ...snackBarVisibility, success: false });
    }, 3000);
  }, [snackBarVisibility.success]);

  return (
    <Box sx={{ pb: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Snackbar open={snackBarVisibility.err1}>
        <Alert
          onClose={handleCloseErr1}
          severity="error"
          sx={{ width: "100%" }}
        >
          Minden mező kitöltése kötelező!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err2}>
        <Alert
          onClose={handleCloseErr2}
          severity="error"
          sx={{ width: "100%" }}
        >
          A két email nem egyezik!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err3}>
        <Alert
          onClose={handleCloseErr3}
          severity="error"
          sx={{ width: "100%" }}
        >
          A két jelszó nem egyezik!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err4}>
        <Alert
          onClose={handleCloseErr4}
          severity="error"
          sx={{ width: "100%" }}
        >
          Hibás e-mail formátum!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err5}>
        <Alert
          onClose={handleCloseErr5}
          severity="error"
          sx={{ width: "100%" }}
        >
          A jelszónak legalább 6 karakter hosszúnak kell lennie!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.err6}>
        <Alert
          onClose={handleCloseErr6}
          severity="error"
          sx={{ width: "100%" }}
        >
          Ez az e-mail cím már foglalt!
        </Alert>
      </Snackbar>
      <Snackbar open={snackBarVisibility.success}>
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Sikeres regisztráció, mostmár bejelentkezhetsz!
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ boxShadow: 0, padding: 5 }}
            style={{ backgroundColor: "#332D2D" }}
          >
            <CardMedia
              component="img"
              height="100"
              image="dumbell_icon.jpg"
              alt="Logo"
            />
          </Card>
          <Typography component="h1" variant="h4" style={{ color: "white" }}>
            Regisztráció
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Vezetéknév"
              name="lastname"
              autoFocus
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.lastname}
              onChange={handleLastNameChanged}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="Keresztnév"
              name="firstname"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.firstname}
              onChange={handleFirstNameChanged}
            />
            <FormControl margin="normal" fullWidth>
              <InputLabel
                required
                variant="filled"
                id="demo-simple-select-label"
              >
                Nem
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="gender"
                label="Gender"
                name="gender"
                style={{ backgroundColor: "white" }}
                sx={{ borderRadius: "7px" }}
                value={actualState.gender}
                onChange={handleGenderChanged}
              >
                <MenuItem value="0">Férfi</MenuItem>
                <MenuItem value="1">Nő</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="birthplace"
              label="Születési Hely"
              name="birthplace"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.birthplace}
              onChange={handleBirthPlaceChanged}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="dateofbirth"
              label="Születési Idő"
              name="dateofbirth"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={actualState.dateofbirth}
              onChange={handleDateOfBirthChanged}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="Lakhely"
              name="city"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.city}
              onChange={handleCityChanged}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.email}
              onChange={handleEmailChanged}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email2"
              label="Email újra"
              name="email2"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.email2}
              onChange={handleEmail2Changed}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Jelszó"
              name="password"
              variant="filled"
              type="password"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.password}
              onChange={handlePasswordChanged}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password2"
              label="Jelszó újra"
              name="password2"
              variant="filled"
              type="password"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.password2}
              onChange={handlePassword2Changed}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Regisztráció
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Már van fiókod? Jelentkezz be!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default withRouter(RegisterForm);
