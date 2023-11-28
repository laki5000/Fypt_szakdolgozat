import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface UploadButtonProps {
  userid: string;
}

const UploadButton: React.FC<UploadButtonProps> = (props) => {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:8080/api/files/upload/" + props.userid, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
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
