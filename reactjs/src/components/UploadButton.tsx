import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const UploadButton: React.FC = (props) => {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
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
