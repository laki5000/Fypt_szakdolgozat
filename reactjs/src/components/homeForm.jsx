import React, { useEffect } from "react";
import DetectMobile from "../services/detectMobile";

const HomeForm = (props) => {
  const isMobile = DetectMobile();

  return (
    <div
      className={`d-flex bg-dark text-light
      ${isMobile ? "pt-3 pb-5 h1 w-100 px-1" : "pt-2 pb-2 h6"}`}
    >
      <div
        className={`d-flex flex-column mx-auto pt-5 pb-5 ${
          isMobile ? "w-100 px-4" : "w-50"
        }`}
      >
        <div className="h1 pb-4">Üdvözöllek az FyPT Webalkalmazásában!</div>
        <div className={`pb-4 ${isMobile ? "h4" : "h6"}`}>
          Üdvözöllek a FyPT webalkalmazásán, ahol magánszemélyek és személyi
          edzők könnyen megtalálhatják egymást céljaik eléréséhez.
        </div>
        <div className={`pb-2 ${isMobile ? "h3" : "h4"}`}>
          Miért válassz minket?
        </div>
        <div className={`pb-4 ${isMobile ? "h4" : "h6"}`}>
          <b>Egyedi profilok: </b>
          Hozd létre egyedi profilod, ahol bemutathatod tapasztaltaid edzőként.
          <b>Keresés és Találat: </b>
          Használd a kereső funkciót, hogy könnyen megtaláld az ideális edzőt
          vagy éppen a megfelelő sportolót a céljaid eléréséhez.
          <b>Közösség</b>
          Csatlakozz a közösséghez, ossz meg sikertörténeteket és inspirálj
          másokat a fitt és egészséges életmód kialakításában.
        </div>
        <div className={`pb-2 ${isMobile ? "h3" : "h4"}`}>
          Regisztrálj most, és kezd el utadat az egészség és jó közérzet felé!
        </div>
      </div>
    </div>
  );
};
export default HomeForm;
