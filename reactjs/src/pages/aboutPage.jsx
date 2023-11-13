import React, { useEffect } from "react";
import AboutForm from "../components/aboutForm";

const AboutPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <AboutForm />
    </div>
  );
};
export default AboutPage;
