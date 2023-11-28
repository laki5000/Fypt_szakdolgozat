import React from "react";
import { withRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisivilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import UserService from "../services/UserService.ts";
import OtherService from "../services/OtherService.ts";
import UploadButton from "./UploadButton.tsx";
import TrainerService from "../services/TrainerService.ts";

const ProfileForm = (props) => {
  const [actualState, setNewState] = React.useState({
    id: "",
    lastname: "",
    firstname: "",
    gender: "",
    birthplace: "",
    dateofbirth: "",
    city: "",
    email: "",
    password: "",
    weight: "",
    height: "",
  });

  const [actualStateOnlyTrainer, setNewStateOnlyTrainer] = React.useState({
    id: "",
    userid: "",
    target: "",
    targetcity: "",
    online: false,
    diet: false,
    trainingtype: "",
    phone: "",
    introduction: "",
  });

  const [tmpStates, setTmpStates] = React.useState({
    id: "",
    lastname: "",
    firstname: "",
    gender: "",
    birthplace: "",
    dateofbirth: "",
    city: "",
    email: "",
    password: "",
    weight: "",
    height: "",
  });

  const [tmpStatesOnlyTrainer, setTmpStatesOnlyTrainer] = React.useState({
    id: "",
    userid: "",
    target: "",
    targetcity: "",
    online: false,
    diet: false,
    trainingtype: "",
    phone: "",
    introduction: "",
  });

  const [otherState, setOtherState] = React.useState({
    ispasswordvisible: false,
    datachange: false,
  });

  const [imageExists, setImageExists] = React.useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  const handleChangeDataButton = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
    setOtherState({ ...otherState, datachange: true });
  };

  const handleDeleteProfileButton = async () => {
    const userResponse = window.confirm(
      "Biztosan törölni szeretnéd a profilt?"
    );

    if (userResponse) {
      if (props.isTrainer) {
        TrainerService.getTrainerByUserid(actualState.id).then((res) => {
          TrainerService.deleteTrainer(res.data.content[0].id);
        });
      }
      UserService.deleteUser(actualState.id).then(() => {
        props.setIsLoggedIn();
        props.setNewState();
        localStorage.removeItem("token");
        props.history.push("/home");
      });
    }
  };

  const handleDiscardChangesButton = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
    setOtherState({ ...otherState, datachange: false });
    setTmps();

    if (props.isTrainer) {
      setTmpsOnlyTrainer();
    }
  };

  const handleSaveChangesButton = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
    if (props.isTrainer) {
      if (
        tmpStates.lastname &&
        tmpStates.firstname &&
        tmpStates.gender &&
        tmpStates.birthplace &&
        tmpStates.dateofbirth &&
        tmpStates.city &&
        tmpStates.email &&
        tmpStates.password &&
        tmpStates.weight &&
        tmpStates.height &&
        tmpStatesOnlyTrainer.introduction &&
        tmpStatesOnlyTrainer.phone &&
        tmpStatesOnlyTrainer.target &&
        tmpStatesOnlyTrainer.targetcity &&
        tmpStatesOnlyTrainer.trainingtype
      ) {
        if (tmpStates.email.includes("@") && tmpStates.email.includes(".")) {
          if (tmpStates.password.length >= 6) {
            let user = {
              id: tmpStates.id,
              lastname: tmpStates.lastname,
              firstname: tmpStates.firstname,
              gender: tmpStates.gender,
              birthplace: tmpStates.birthplace,
              dateofbirth: tmpStates.dateofbirth,
              city: tmpStates.city,
              email: tmpStates.email,
              password: tmpStates.password,
              weight: tmpStates.weight,
              height: tmpStates.height,
            };

            let trainer = {
              id: tmpStatesOnlyTrainer.id,
              userid: tmpStatesOnlyTrainer.userid,
              target: tmpStatesOnlyTrainer.target,
              targetcity: tmpStatesOnlyTrainer.targetcity,
              online: tmpStatesOnlyTrainer.online,
              diet: tmpStatesOnlyTrainer.diet,
              trainingtype: tmpStatesOnlyTrainer.trainingtype,
              phone: tmpStatesOnlyTrainer.phone,
              introduction: tmpStatesOnlyTrainer.introduction,
            };
            UserService.saveUser(user).then((res) => {
              if (res.data) {
                TrainerService.saveTrainer(trainer).then((res2) => {
                  if (res2.data) {
                    setOtherState({ ...otherState, datachange: false });
                    setStates();
                    setStatesOnlyTrainer();
                    props.openAlert("success3");
                  }
                });
              }
            });
          } else {
            props.openAlert("err5");
          }
        } else {
          props.openAlert("err4");
        }
      } else {
        props.openAlert("err1");
      }
    } else {
      if (
        tmpStates.lastname &&
        tmpStates.firstname &&
        tmpStates.gender &&
        tmpStates.birthplace &&
        tmpStates.dateofbirth &&
        tmpStates.city &&
        tmpStates.email &&
        tmpStates.password &&
        tmpStates.weight &&
        tmpStates.height
      ) {
        if (tmpStates.email.includes("@") && tmpStates.email.includes(".")) {
          if (tmpStates.password.length >= 6) {
            let user = {
              id: tmpStates.id,
              lastname: tmpStates.lastname,
              firstname: tmpStates.firstname,
              gender: tmpStates.gender,
              birthplace: tmpStates.birthplace,
              dateofbirth: tmpStates.dateofbirth,
              city: tmpStates.city,
              email: tmpStates.email,
              password: tmpStates.password,
              weight: tmpStates.weight,
              height: tmpStates.height,
            };
            UserService.saveUser(user).then((res) => {
              if (res.data) {
                setOtherState({ ...otherState, datachange: false });
                setStates();
                props.openAlert("success3");
              }
            });
          } else {
            props.openAlert("err5");
          }
        } else {
          props.openAlert("err4");
        }
      } else {
        props.openAlert("err1");
      }
    }
  };

  const handleLastNameChanged = (event) => {
    setTmpStates({ ...tmpStates, lastname: event.target.value });
  };

  const handleFirstNameChanged = (event) => {
    setTmpStates({ ...tmpStates, firstname: event.target.value });
  };

  const handleGenderChanged = (event) => {
    setTmpStates({ ...tmpStates, gender: event.target.value });
  };

  const handleBirthPlaceChanged = (event) => {
    setTmpStates({ ...tmpStates, birthplace: event.target.value });
  };

  const handleDateOfBirthChanged = (event) => {
    setTmpStates({ ...tmpStates, dateofbirth: event.target.value });
  };

  const handleCityChanged = (event) => {
    setTmpStates({ ...tmpStates, city: event.target.value });
  };

  const handleEmailChanged = (event) => {
    setTmpStates({ ...tmpStates, email: event.target.value });
  };

  const handlePasswordChanged = (event) => {
    setTmpStates({ ...tmpStates, password: event.target.value });
  };

  const handleWeightChanged = (event) => {
    setTmpStates({ ...tmpStates, weight: event.target.value });
  };

  const handleHeightChanged = (event) => {
    setTmpStates({ ...tmpStates, height: event.target.value });
  };

  const handleTargetChanged = (event) => {
    setTmpStatesOnlyTrainer({
      ...tmpStatesOnlyTrainer,
      target: event.target.value,
    });
  };

  const handleTargetCityChanged = (event) => {
    setTmpStatesOnlyTrainer({
      ...tmpStatesOnlyTrainer,
      targetcity: event.target.value,
    });
  };

  const handleOnlineChanged = (event) => {
    setTmpStatesOnlyTrainer({
      ...tmpStatesOnlyTrainer,
      online: !tmpStatesOnlyTrainer.online,
    });
  };

  const handleDietChanged = (event) => {
    setTmpStatesOnlyTrainer({
      ...tmpStatesOnlyTrainer,
      diet: !tmpStatesOnlyTrainer.diet,
    });
  };

  const handleTrainingTypeChanged = (event) => {
    setTmpStatesOnlyTrainer({
      ...tmpStatesOnlyTrainer,
      trainingtype: event.target.value,
    });
  };

  const handlePhoneChanged = (event) => {
    setTmpStatesOnlyTrainer({
      ...tmpStatesOnlyTrainer,
      phone: event.target.value,
    });
  };

  const handleIntroductionChanged = (event) => {
    setTmpStatesOnlyTrainer({
      ...tmpStatesOnlyTrainer,
      introduction: event.target.value,
    });
  };

  const setTmps = () => {
    setTmpStates({
      id: actualState.id,
      lastname: actualState.lastname,
      firstname: actualState.firstname,
      gender: actualState.gender.toString(),
      birthplace: actualState.birthplace,
      dateofbirth: actualState.dateofbirth,
      city: actualState.city,
      email: actualState.email,
      password: actualState.password,
      weight: actualState.weight.toString(),
      height: actualState.height.toString(),
    });
  };

  const setTmpsOnlyTrainer = () => {
    setTmpStatesOnlyTrainer({
      ...actualStateOnlyTrainer,
      id: actualStateOnlyTrainer.id,
      userid: actualStateOnlyTrainer.userid,
      target: actualStateOnlyTrainer.target.toString(),
      targetcity: actualStateOnlyTrainer.targetcity,
      online: actualStateOnlyTrainer.online,
      diet: actualStateOnlyTrainer.diet,
      trainingtype: actualStateOnlyTrainer.trainingtype,
      phone: actualStateOnlyTrainer.phone,
      introduction: actualStateOnlyTrainer.introduction,
    });
  };

  const setStates = () => {
    if (props.userid) {
      UserService.getUserById(props.userid).then((res) => {
        setNewState({
          ...actualState,
          id: res.data.content[0].id,
          lastname: res.data.content[0].lastname,
          firstname: res.data.content[0].firstname,
          gender: res.data.content[0].gender,
          birthplace: res.data.content[0].birthplace,
          dateofbirth: res.data.content[0].dateofbirth,
          city: res.data.content[0].city,
          email: res.data.content[0].email,
          password: res.data.content[0].password,
          weight: res.data.content[0].weight,
          height: res.data.content[0].height,
        });
        setIsLoading(false);
      });
    }
  };

  const setStatesOnlyTrainer = () => {
    if (props.userid) {
      TrainerService.getTrainerByUserid(props.userid).then((res) => {
        if (res.data.content.length > 0) {
          setNewStateOnlyTrainer({
            ...actualStateOnlyTrainer,
            id: res.data.content[0].id,
            userid: res.data.content[0].userid,
            target: res.data.content[0].target,
            targetcity: res.data.content[0].targetcity,
            online: res.data.content[0].online,
            diet: res.data.content[0].diet,
            trainingtype: res.data.content[0].trainingtype,
            phone: res.data.content[0].phone,
            introduction: res.data.content[0].introduction,
          });
        } else {
          props.setIsTrainer();
        }
      });
    }
  };

  React.useEffect(() => {
    setStates();

    const img = new Image();
    img.src = props.userid + ".jpg";

    img.onload = () => {
      setImageExists(true);
    };

    img.onerror = () => {
      setImageExists(false);
    };
  }, [props.userid]);

  React.useEffect(() => {
    if (props.isTrainer) {
      setStatesOnlyTrainer();
    }
  }, [props.isTrainer]);

  React.useEffect(() => {
    setTmps();
  }, [actualState]);

  React.useEffect(() => {
    setTmpsOnlyTrainer();
  }, [actualStateOnlyTrainer]);

  return (
    <Box sx={{ pb: 5, pt: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Container component="main" maxWidth="md">
        <Card sx={{ p: 3 }}>
          <Typography
            style={{ textAlign: "center" }}
            sx={{ paddingBottom: 3 }}
            variant="h3"
          >
            {props.isTrainer && "Edző "}Profil
          </Typography>
          <Avatar
            style={{ margin: "auto" }}
            sx={{ width: 256, height: 256 }}
            alt="profile picture"
            src={imageExists ? props.userid + ".jpg" : "profile_pic_def.jpg"}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <UploadButton
              userid={props.userid}
              openAlert={(type) => {
                props.openAlert(type);
              }}
            />
          </Box>
          <Typography
            style={{ textAlign: "center" }}
            sx={{ paddingTop: 3 }}
            variant="h3"
          >
            {actualState.lastname +
              " " +
              actualState.firstname +
              " (" +
              OtherService.getAge(actualState.dateofbirth) +
              ")"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <List>
              <ListItem>
                <ListItemText>Vezetéknév</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Keresztnév</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Nem</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Születési hely</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Születési idő</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Lakhely</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>E-mail</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Jelszó</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Testsúly</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Magasság</ListItemText>
              </ListItem>
              {props.isTrainer && (
                <Box>
                  <ListItem>
                    <ListItemText>Kiket vállal?</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Hol?</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Online tréninget vállal?</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Étrendkészítést vállal?</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Specializáció</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Telefonszám</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Bemutatkozás</ListItemText>
                  </ListItem>
                </Box>
              )}
            </List>
            <List>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="lastname"
                      name="lastname"
                      variant="standard"
                      style={{ backgroundColor: "white", height: "24px" }}
                      value={tmpStates.lastname}
                      onChange={handleLastNameChanged}
                    />
                  ) : (
                    actualState.lastname
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="firstname"
                      name="firstname"
                      variant="standard"
                      style={{ backgroundColor: "white", height: "24px" }}
                      value={tmpStates.firstname}
                      onChange={handleFirstNameChanged}
                    />
                  ) : (
                    actualState.firstname
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <FormControl>
                      <InputLabel
                        variant="standard"
                        id="demo-simple-select-label"
                      >
                        Nem
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="gender"
                        name="gender"
                        style={{ backgroundColor: "white", height: "24px" }}
                        sx={{ borderRadius: "7px" }}
                        value={tmpStates.gender}
                        onChange={handleGenderChanged}
                      >
                        <MenuItem value="0">Férfi</MenuItem>
                        <MenuItem value="1">Nő</MenuItem>
                      </Select>
                    </FormControl>
                  ) : parseInt(actualState.gender) === 0 ? (
                    "Férfi"
                  ) : (
                    "Nő"
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="birthplace"
                      name="birthplace"
                      variant="standard"
                      style={{ backgroundColor: "white", height: "24px" }}
                      value={tmpStates.birthplace}
                      onChange={handleBirthPlaceChanged}
                    />
                  ) : (
                    actualState.birthplace
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="dateofbirth"
                      name="dateofbirth"
                      variant="standard"
                      style={{ backgroundColor: "white", height: "24px" }}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={tmpStates.dateofbirth.toString().split("T")[0]}
                      onChange={handleDateOfBirthChanged}
                    />
                  ) : (
                    actualState.dateofbirth.toString().split("T")[0]
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="city"
                      name="city"
                      variant="standard"
                      style={{ backgroundColor: "white", height: "24px" }}
                      value={tmpStates.city}
                      onChange={handleCityChanged}
                    />
                  ) : (
                    actualState.city
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="email"
                      name="email"
                      variant="standard"
                      style={{ backgroundColor: "white", height: "24px" }}
                      value={tmpStates.email}
                      onChange={handleEmailChanged}
                    />
                  ) : (
                    actualState.email
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                {otherState.datachange ? (
                  <TextField
                    id="password"
                    name="password"
                    variant="standard"
                    style={{ backgroundColor: "white", height: "32px" }}
                    value={tmpStates.password}
                    onChange={handlePasswordChanged}
                  />
                ) : otherState.ispasswordvisible ? (
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ListItemText>{actualState.password}</ListItemText>
                    <VisivilityOffIcon
                      sx={{ marginLeft: "10px" }}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setOtherState({
                          ...otherState,
                          ispasswordvisible: !otherState.ispasswordvisible,
                        });
                      }}
                    />
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ListItemText>
                      {"*".repeat(actualState.password.length)}
                    </ListItemText>
                    <VisibilityIcon
                      sx={{ marginLeft: "10px" }}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setOtherState({
                          ...otherState,
                          ispasswordvisible: !otherState.ispasswordvisible,
                        });
                      }}
                    />
                  </Box>
                )}
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="weight"
                      name="weight"
                      variant="standard"
                      type="number"
                      style={{ backgroundColor: "white", height: "24px" }}
                      value={tmpStates.weight}
                      onChange={handleWeightChanged}
                    />
                  ) : parseInt(actualState.weight) === 0 ? (
                    "Nincs megadva"
                  ) : (
                    actualState.weight + " kg"
                  )}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {otherState.datachange ? (
                    <TextField
                      id="height"
                      name="height"
                      variant="standard"
                      type="number"
                      style={{ backgroundColor: "white", height: "24px" }}
                      value={tmpStates.height}
                      onChange={handleHeightChanged}
                    />
                  ) : parseInt(actualState.height) === 0 ? (
                    "Nincs megadva"
                  ) : (
                    actualState.height + " cm"
                  )}
                </ListItemText>
              </ListItem>
              {props.isTrainer && (
                <Box>
                  <ListItem>
                    {otherState.datachange ? (
                      <FormControl>
                        <InputLabel
                          variant="standard"
                          id="demo-simple-select-label"
                        >
                          Nem
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="target"
                          name="target"
                          style={{ backgroundColor: "white", height: "32px" }}
                          sx={{ borderRadius: "7px" }}
                          value={tmpStatesOnlyTrainer.target}
                          onChange={handleTargetChanged}
                        >
                          <MenuItem value="0">Férfiak</MenuItem>
                          <MenuItem value="1">Nők</MenuItem>
                          <MenuItem value="2">Mindenki</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      <ListItemText>
                        {parseInt(actualStateOnlyTrainer.target) === 0 &&
                          "Férfiak"}
                        {parseInt(actualStateOnlyTrainer.target) === 1 && "Nők"}
                        {parseInt(actualStateOnlyTrainer.target) === 2 &&
                          "Mindenki"}
                      </ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      {otherState.datachange ? (
                        <TextField
                          id="targetcity"
                          name="targetcity"
                          variant="standard"
                          style={{ backgroundColor: "white", height: "24px" }}
                          value={tmpStatesOnlyTrainer.targetcity}
                          onChange={handleTargetCityChanged}
                        />
                      ) : (
                        actualStateOnlyTrainer.targetcity
                      )}
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      {otherState.datachange ? (
                        <Checkbox
                          checked={tmpStatesOnlyTrainer.online}
                          onChange={handleOnlineChanged}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{
                            color: "#3B71CA",
                            "&.Mui-checked": {
                              color: "#3B71CA",
                            },
                          }}
                          style={{ height: "22px" }}
                        />
                      ) : actualStateOnlyTrainer.online ? (
                        "Igen"
                      ) : (
                        "Nem"
                      )}
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      {otherState.datachange ? (
                        <Checkbox
                          checked={tmpStatesOnlyTrainer.diet}
                          onChange={handleDietChanged}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{
                            color: "#3B71CA",
                            "&.Mui-checked": {
                              color: "#3B71CA",
                            },
                          }}
                          style={{ height: "22px" }}
                        />
                      ) : actualStateOnlyTrainer.diet ? (
                        "Igen"
                      ) : (
                        "Nem"
                      )}
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      {otherState.datachange ? (
                        <TextField
                          id="trainingtype"
                          name="trainingtype"
                          variant="standard"
                          style={{ backgroundColor: "white", height: "24px" }}
                          value={tmpStatesOnlyTrainer.trainingtype}
                          onChange={handleTrainingTypeChanged}
                        />
                      ) : (
                        actualStateOnlyTrainer.trainingtype
                      )}
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      {otherState.datachange ? (
                        <TextField
                          type="number"
                          id="phone"
                          name="phone"
                          variant="standard"
                          style={{ backgroundColor: "white", height: "24px" }}
                          value={tmpStatesOnlyTrainer.phone}
                          onChange={handlePhoneChanged}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +36
                              </InputAdornment>
                            ),
                          }}
                        />
                      ) : (
                        "+36" + actualStateOnlyTrainer.phone
                      )}
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      {otherState.datachange ? (
                        <FormControl margin="normal" fullWidth>
                          <TextareaAutosize
                            minRows={5}
                            placeholder="Bemutatkozás*"
                            style={{ resize: "none" }}
                            value={tmpStatesOnlyTrainer.introduction}
                            onChange={handleIntroductionChanged}
                          />
                        </FormControl>
                      ) : (
                        actualStateOnlyTrainer.introduction
                      )}
                    </ListItemText>
                  </ListItem>
                </Box>
              )}
            </List>
          </Box>
          {!otherState.datachange ? (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                disabled={isButtonDisabled}
                onClick={() => {
                  handleChangeDataButton();
                }}
              >
                Adatok módosítása
              </Button>
              <Button
                disabled={isButtonDisabled}
                color="error"
                onClick={() => {
                  handleDeleteProfileButton();
                }}
              >
                Profil törlése
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                disabled={isButtonDisabled}
                onClick={() => {
                  handleSaveChangesButton();
                }}
              >
                Adatok mentése
              </Button>
              <Button
                disabled={isButtonDisabled}
                color="error"
                onClick={() => {
                  handleDiscardChangesButton();
                }}
              >
                Változtatások elvetése
              </Button>
            </Box>
          )}
        </Card>
      </Container>
    </Box>
  );
};
export default withRouter(ProfileForm);
