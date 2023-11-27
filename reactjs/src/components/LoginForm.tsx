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
import UserService from "../services/UserService.ts";
import TrainerService from "../services/TrainerService.ts";

const LoginForm = (props) => {
  const [actualState, setNewState] = React.useState({
    email: "",
    password: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const handleEmailChanged = (event) => {
    setNewState({ ...actualState, email: event.target.value });
  };

  const handlePasswordChanged = (event) => {
    setNewState({ ...actualState, password: event.target.value });
  };

  const handleSubmit = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
    let user = {
      email: actualState.email,
      password: actualState.password,
    };
    UserService.loginUser(user).then((res) => {
      if (res.data) {
        localStorage.setItem("token", res.data[1]);
        props.setNewState(res.data[0], res.data[1]);
        props.setIsLoggedIn();
        props.setIsTrainer();
        props.openAlert("success2");
        TrainerService.getTrainerByUserid(res.data[0]).then((resp) => {
          if (resp.data.content.length > 0) {
            props.setIsTrainer();
          }
        });
        if (window.location.pathname !== "/profile") {
          setTimeout(() => {
            props.history.push("/home");
          }, 1000);
        }
      } else {
        props.openAlert("err7");
      }
    });
  };

  return (
    <Box sx={{ pb: 5 }} style={{ backgroundColor: "#332D2D" }}>
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
            Bejelentkezés
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
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
              name="password"
              label="Jelszó"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.password}
              onChange={handlePasswordChanged}
            />
            <Button
              disabled={isButtonDisabled}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Bejelentkezés
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Még nincs fiókod? Regisztrálj!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default withRouter(LoginForm);
