import React, { useEffect } from "react";

const AboutPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return <div>About Page</div>;
};
export default AboutPage;
