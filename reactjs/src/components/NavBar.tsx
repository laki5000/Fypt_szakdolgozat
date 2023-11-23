import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import TrainerService from "../services/TrainerService.ts";
import UserService from "../services/UserService.ts";

const pages = ["Kezdőlap", "Edzőink", "Csatlakozz", "Rólunk"];

const NavBar = (props) => {
  const [actualState, setNewState] = React.useState({
    lastname: "",
    firstname: "",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    handleButtonClick(page);
  };

  const handleCloseUserMenu = (page) => {
    setAnchorElUser(null);
    handleButtonClick(page);
  };

  const handleButtonClick = (page) => {
    switch (page) {
      case "Bejelentkezés":
        props.history.push("/login");
        break;
      case "Kezdőlap":
        props.history.push("/home");
        break;
      case "Edzőink":
        props.history.push("/trainers");
        break;
      case "Csatlakozz":
        if (localStorage.getItem("token")) {
          TrainerService.getTrainerByUserid(props.userid).then((res) => {
            if (res.data.content.length > 0) {
              props.openAlert("err8");
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
      case "Profil":
        props.history.push("/profile");
        break;
      case "Kijelentkezés":
        props.setIsLoggedIn();
        props.setNewState();
        localStorage.removeItem("token");
        props.history.push("/home");
        break;
    }
  };

  React.useEffect(() => {
    setIsLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn]);

  React.useEffect(() => {
    if (props.userid) {
      UserService.getUserById(props.userid).then((res) => {
        setNewState({
          ...actualState,
          lastname: res.data.content[0].lastname,
          firstname: res.data.content[0].firstname,
        });
      });
    }
  }, [props.userid]);

  return (
    <AppBar style={{ backgroundColor: "#332D2D" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => {
              handleButtonClick("Kezdőlap");
            }}
            sx={{ my: 2, color: "white", display: { xs: "none", md: "flex" } }}
          >
            <Card
              sx={{ mr: 5, boxShadow: 0 }}
              style={{ backgroundColor: "#332D2D" }}
            >
              <CardMedia
                component="img"
                height="50"
                image="dumbell_icon.jpg"
                alt="Logo"
              />
            </Card>
          </Button>

          <Box sx={{ flexGrow: 3, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page);
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu(page);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "18px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="profile_pic_def.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    mb: "10px",
                    fontSize: "20px",
                  }}
                >
                  {actualState.lastname + " " + actualState.firstname}
                </Typography>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu("Profil");
                  }}
                >
                  <PersonIcon
                    sx={{
                      mr: "5px",
                      fontSize: "22px",
                    }}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    Profil
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu("Kijelentkezés");
                  }}
                >
                  <LogoutIcon
                    sx={{
                      mr: "5px",
                      fontSize: "22px",
                    }}
                  />
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    Kijelentkezés
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              onClick={() => {
                handleButtonClick("Bejelentkezés");
              }}
              sx={{ my: 3, color: "white", display: "block", fontSize: 18 }}
            >
              <Typography>Bejelentkezés</Typography>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withRouter(NavBar);
