import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HomeForm = () => {
  return (
    <Box sx={{ pb: 5, pt: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Container component="main" maxWidth="md">
        <Typography
          variant="h3"
          style={{ color: "white", paddingBottom: "6%" }}
        >
          Kezdőlap
        </Typography>
        <Typography
          variant="h5"
          style={{ color: "white", paddingBottom: "12%" }}
        >
          Üdvözöllek a FyPT webalkalmazásán, ahol magánszemélyek és személyi
          edzők könnyen megtalálhatják egymást céljaik eléréséhez.
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "white", paddingBottom: "3%" }}
        >
          Miért válassz minket?
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "white", paddingBottom: "12%" }}
        >
          <Box>
            <b>
              <u>Egyedi profilok:</u>{" "}
            </b>
            Hozd létre egyedi profilod, ahol bemutathatod tapasztaltaid
            edzőként.
          </Box>
          <Box>
            <b>
              <u>Keresés és Találat:</u>{" "}
            </b>
            Használd a kereső funkciót, hogy könnyen megtaláld az ideális edzőt
            vagy éppen a megfelelő sportolót a céljaid eléréséhez.
          </Box>
          <Box>
            <b>
              <u>Közösség:</u>{" "}
            </b>
            Csatlakozz a közösséghez, ossz meg sikertörténeteket és inspirálj
            másokat a fitt és egészséges életmód kialakításában.
          </Box>
        </Typography>
        <Typography variant="h6" style={{ color: "white" }}>
          Regisztrálj most, és kezd el utadat az egészség és jó közérzet felé!
        </Typography>
      </Container>
    </Box>
  );
};

export default HomeForm;
