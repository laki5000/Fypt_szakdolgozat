import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ProfileForm from "../components/ProfileForm.tsx";
import TrainerService from "../services/TrainerService.ts";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ProfileDialog({ userid, name }) {
  const [open, setOpen] = React.useState(false);
  const [isTrainer, setIsTrainer] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    TrainerService.getTrainerByUserid(userid).then((res) => {
      if (res.data.content.length > 0) {
        setIsTrainer(true);
      }
    });
  }, [userid]);

  return (
    <React.Fragment>
      <Box onClick={handleClickOpen} sx={{ cursor: "pointer" }}>
        <Typography>{name}</Typography>
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box>
          <ProfileForm userid={userid} isTrainer={isTrainer} mode="dialog" />
        </Box>
      </BootstrapDialog>
    </React.Fragment>
  );
}
