import React from "react";
import Box from "@mui/material/Box";
import { withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const AdminForm = (props) => {
  const handleButtonClick = (mode) => {
    switch (mode) {
      case "applications":
        break;
      case "users":
        props.history.push("/admin.users");
        break;
    }
  };

  return (
    <Box sx={{ pb: 5, pt: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Container component="main" maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
              onClick={() => {
                handleButtonClick("applications");
              }}
            >
              Edző jelentkezések
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
              onClick={() => {
                handleButtonClick("users");
              }}
            >
              Összes felhasználó
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default withRouter(AdminForm);
