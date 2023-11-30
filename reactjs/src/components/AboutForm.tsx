import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const AboutForm = () => {
  return (
    <Box sx={{ pb: 5, pt: 5 }} style={{ backgroundColor: "#332D2D" }}>
      <Container component="main" maxWidth="md">
        <Typography
          variant="h3"
          style={{ color: "white", paddingBottom: "6%" }}
        >
          Rólunk
        </Typography>
        <Typography
          variant="h5"
          style={{ color: "white", paddingBottom: "12%" }}
        >
          A FyPT egy olyan online platform, amely lehetőséget teremt a
          magánszemélyek és személyi edzők közötti könnyű kapcsolatfelvételre.
          Célunk, hogy segítsük a sportolni vágyókat megtalálni az ideális
          személyi edzőt, és szakemberek számára megkönnyítsük a
          kapcsolatfelvételt a potenciális ügyfelekkel.
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "white", paddingBottom: "3%" }}
        >
          Miért minket válassz?
        </Typography>
        <Typography variant="h6" style={{ color: "white" }}>
          <Box>
            <b>
              <u>Felhasználóbarát platform:</u>{" "}
            </b>
            Az egyszerű és intuitív felületünk segít a gyors és hatékony
            használatban mind az edzők, mind a sportolni vágyók számára.
          </Box>
          <Box>
            <b>
              <u>Biztonság és Adatvédelem:</u>{" "}
            </b>
            Fontosnak tartjuk a felhasználóink biztonságát és adataik védelmét.
            Az alkalmazásunk biztonságos, és az adatvédelmi szaályoknak
            megfelelően működik.
          </Box>
          <Box>
            <b>
              <u>Inspiráció és Támogatás:</u>{" "}
            </b>
            Nemcsak egy alkalmazás vagyunk, hanem egy közösség, ahol az emberek
            inspirálhatják egymást, és támogathatják egymást a sport és egészség
            terén.
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutForm;
