import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import TrainerService from "../services/TrainerService.ts";

const RegisterForm = (props) => {
  const [actualState, setNewState] = React.useState({
    userid: "",
    target: "",
    targetcity: "",
    online: false,
    diet: false,
    trainingtype: "",
    phone: "",
    introduction: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const handleTargetChanged = (event) => {
    setNewState({ ...actualState, target: event.target.value });
  };

  const handleTargetCityChanged = (event) => {
    setNewState({ ...actualState, targetcity: event.target.value });
  };

  const handleOnlineChanged = () => {
    setNewState({ ...actualState, online: !actualState.online });
  };

  const handleDietChanged = () => {
    setNewState({ ...actualState, diet: !actualState.diet });
  };

  const handleTrainingTypeChanged = (event) => {
    setNewState({ ...actualState, trainingtype: event.target.value });
  };

  const handlePhoneChanged = (event) => {
    setNewState({ ...actualState, phone: event.target.value });
  };

  const handleIntroductionChanged = (event) => {
    if (event.target.value <= 225) {
      setNewState({ ...actualState, introduction: event.target.value });
    } else {
      setNewState({
        ...actualState,
        introduction: event.target.value.slice(0, 255),
      });
    }
  };

  const handleSubmit = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
    if (
      actualState.target &&
      actualState.trainingtype &&
      actualState.phone &&
      actualState.introduction
    ) {
      let trainer = {
        userid: actualState.userid,
        target: actualState.target,
        targetcity: actualState.targetcity,
        online: actualState.online,
        diet: actualState.diet,
        trainingtype: actualState.trainingtype,
        phone: actualState.phone,
        introduction: actualState.introduction,
      };
      TrainerService.saveTrainer(trainer).then((res) => {
        if (res.data) {
          props.setIsTrainer();
          props.openAlert("success1");
          setTimeout(() => {
            props.history.push("/home");
          }, 1000);
        }
      });
    } else {
      props.openAlert("err1");
    }
  };

  React.useEffect(() => {
    setNewState({ ...actualState, userid: props.userid });
  }, [props.userid]);

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
            Edző regisztráció
          </Typography>
          <Box sx={{ mt: 1 }}>
            <FormControl margin="normal" fullWidth>
              <InputLabel
                required
                variant="filled"
                id="demo-simple-select-label"
              >
                Kiket vállalsz?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="target"
                label="Target"
                name="target"
                style={{ backgroundColor: "white" }}
                sx={{ borderRadius: "7px" }}
                value={actualState.target}
                onChange={handleTargetChanged}
              >
                <MenuItem value="0">Férfi</MenuItem>
                <MenuItem value="1">Nő</MenuItem>
                <MenuItem value="2">Mindenki</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="targetcity"
              label="Hol vállalsz edzést?"
              name="targetcity"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.targetcity}
              onChange={handleTargetCityChanged}
            />
            <FormControl margin="normal" fullWidth>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={actualState.online}
                      onChange={handleOnlineChanged}
                      inputProps={{ "aria-label": "controlled" }}
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#3B71CA",
                        },
                      }}
                    />
                  }
                  label={
                    <span style={{ color: "white" }}>
                      Online edzést vállalok.
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={actualState.diet}
                      onChange={handleDietChanged}
                      inputProps={{ "aria-label": "controlled" }}
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#3B71CA",
                        },
                      }}
                    />
                  }
                  label={
                    <span style={{ color: "white" }}>Étrendet vállalok.</span>
                  }
                />
              </FormGroup>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="trainingtype"
              label="Milyen típusú edzést vállalsz?"
              name="trainingtype"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.trainingtype}
              onChange={handleTrainingTypeChanged}
            />
            <TextField
              type="number"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Telefonszám"
              name="phone"
              variant="filled"
              style={{ backgroundColor: "white" }}
              sx={{ borderRadius: "7px" }}
              value={actualState.phone}
              onChange={handlePhoneChanged}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+36</InputAdornment>
                ),
              }}
            />
            <FormControl margin="normal" fullWidth>
              <TextareaAutosize
                minRows={5}
                placeholder="Bemutatkozás*"
                style={{ resize: "none" }}
                value={actualState.introduction}
                onChange={handleIntroductionChanged}
              />
            </FormControl>

            <Button
              disabled={isButtonDisabled}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Regisztráció
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default withRouter(RegisterForm);
