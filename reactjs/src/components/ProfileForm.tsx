import React from "react";
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

import UserService from "../services/UserService.ts";
import OtherService from "../services/OtherService.ts";
import UploadButton from "./UploadButton.tsx";

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

  const [otherState, setOtherState] = React.useState({
    isPasswordVisible: false,
  });

  const [imageExists, setImageExists] = React.useState(false);

  React.useEffect(() => {
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
      });
    }
  }, [props.userid]);

  React.useEffect(() => {
    const img = new Image();
    img.src = actualState.id + ".jpg";

    img.onload = () => {
      setImageExists(true);
    };

    img.onerror = () => {
      setImageExists(false);
    };
  }, []);

  return (
    <Box sx={{ pb: 5, pt: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Container component="main" maxWidth="md">
        <Card sx={{ p: 3 }}>
          <Typography
            style={{ textAlign: "center" }}
            sx={{ paddingBottom: 3 }}
            variant="h3"
          >
            Profil
          </Typography>
          <Avatar
            style={{ margin: "auto" }}
            sx={{ width: 256, height: 256 }}
            alt="profile picture"
            src={imageExists ? actualState.id + ".jpg" : "profile_pic_def.jpg"}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <UploadButton />
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
            </List>
            <List>
              <ListItem>
                <ListItemText>{actualState.lastname}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{actualState.firstname}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {parseInt(actualState.gender) === 0 ? "Férfi" : "Nő"}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{actualState.birthplace}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {actualState.dateofbirth.toString().split("T")[0]}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{actualState.city}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{actualState.email}</ListItemText>
              </ListItem>
              <ListItem>
                {otherState.isPasswordVisible ? (
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ListItemText>{actualState.password}</ListItemText>
                    <VisivilityOffIcon
                      sx={{ marginLeft: "10px" }}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setOtherState({
                          ...otherState,
                          isPasswordVisible: !otherState.isPasswordVisible,
                        });
                      }}
                    />
                  </Box>
                ) : (
                  <ListItemText>
                    <Box>
                      {"*".repeat(actualState.password.length)}
                      <VisibilityIcon
                        sx={{ marginLeft: "10px" }}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setOtherState({
                            ...otherState,
                            isPasswordVisible: !otherState.isPasswordVisible,
                          });
                        }}
                      />
                    </Box>
                  </ListItemText>
                )}
              </ListItem>
              <ListItem>
                <ListItemText>
                  {parseInt(actualState.weight) === 0
                    ? "Nincs megadva"
                    : actualState.weight + " cm"}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  {parseInt(actualState.height) === 0
                    ? "Nincs megadva"
                    : actualState.height + " cm"}
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};
export default ProfileForm;
