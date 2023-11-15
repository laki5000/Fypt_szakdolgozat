import React, { useEffect } from "react";
import DetectMobile from "../services/detectMobile";

const AboutForm = (props) => {
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
        <div className="h1 pb-4">
          Mi vagyunk a FyPT (Find Your Personal Trainer)
        </div>
        <div className={`pb-4 ${isMobile ? "h4" : "h6"}`}>
          A FyPT egy olyan online platform, amely lehetőséget teremt a
          magánszemélyek és személyi edzők közötti könnyű kapcsolatfelvételre.
          Célunk, hogy segítsük a sportolni vágyókat megtalálni az ideális
          személyi edzőt, és szakemberek számára megkönnyítsük a
          kapcsolatfelvételt a potenciális ügyfelekkel.
        </div>
        <div className={`pb-2 ${isMobile ? "h3" : "h4"}`}>
          Miért minket válassz?
        </div>
        <div className={`pb-2 ${isMobile ? "h4" : "h6"}`}>
          <b>Felhasználóbarát platform: </b>
          Az egyszerű és intuitív felületünk segít a gyors és hatékony
          használatban mind az edzők, mind a sportolni vágyók számára.
          <b>Biztonság és Adatvédelem: </b>
          Fontosnak tartjuk a felhasználóink biztonságát és adataik védelmét. Az
          alkalmazásunk biztonságos, és az adatvédelmi szaályoknak megfelelően
          működik.
          <b>Inspiráció és Támogatás</b>
          Nemcsak egy alkalmazás vagyunk, hanem egy közösség, ahol az emberek
          inspirálhatják egymást, és támogathatják egymást a sport és egészség
          terén.
        </div>
      </div>
    </div>
  );
};
export default AboutForm;
