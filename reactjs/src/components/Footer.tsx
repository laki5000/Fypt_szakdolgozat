import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { withRouter } from "react-router-dom";
import TrainerService from "../services/TrainerService.ts";

const Footer = (props) => {
  const handleLinkTo = (page) => {
    switch (page) {
      case "Kezdőlap":
        props.history.push("/home");
        break;
      case "Edzőink":
        props.history.push("/trainers");
        break;
      case "Csatlakozz":
        if (localStorage.getItem("token")) {
          TrainerService.getTrainerByUserid(props.userid).then((res) => {
            if (props.isTrainer) {
              if (res.data.content.length > 0) {
                props.openAlert("err8");
              } else {
                props.setIsTrainer();
                props.history.push("/join");
              }
            } else {
              props.history.push("/join");
            }
          });
        } else {
          props.history.push("/login");
        }
        break;
      case "Rólunk":
        props.history.push("/about");
        break;
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#3B71CA",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              color="white"
              variant="h5"
              style={{ marginBottom: "5%" }}
            >
              Find Your Personal Trainer
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Typography
                onClick={() => {
                  handleLinkTo("Kezdőlap");
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                Kezdőlap
              </Typography>
              <Typography style={{ marginInline: "5px", color: "white" }}>
                |
              </Typography>
              <Typography
                onClick={() => {
                  handleLinkTo("Edzőink");
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                Edzőink
              </Typography>
              <Typography style={{ marginInline: "5px", color: "white" }}>
                |
              </Typography>
              <Typography
                onClick={() => {
                  handleLinkTo("Csatlakozz");
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                Csatlakozz
              </Typography>
              <Typography style={{ marginInline: "5px", color: "white" }}>
                |
              </Typography>
              <Typography
                onClick={() => {
                  handleLinkTo("Rólunk");
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                Rólunk
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default withRouter(Footer);
