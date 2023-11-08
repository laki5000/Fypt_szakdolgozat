import React, { useEffect } from "react";

const HomePage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return <div>Home</div>;
};
export default HomePage;
