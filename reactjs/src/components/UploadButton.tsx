import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FileService from "../services/FileService.ts";

interface UploadButtonProps {
  userid: string;
  openAlert: (message: string) => void;
}

const UploadButton: React.FC<UploadButtonProps> = (props) => {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      const formData = new FormData();
      formData.append("file", file);

      FileService.uploadImage(props.userid, formData).then((res) => {
        if (res.data === "error") {
          props.openAlert("err9");
        } else if (res.data === "success") {
          props.openAlert("success4");
        }
      });
    }
  };

  return (
    <Box>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <Button variant="contained" sx={{ marginTop: "5px" }} component="span">
          Feltöltés (Csak jpg)
        </Button>
      </label>
    </Box>
  );
};

export default UploadButton;
