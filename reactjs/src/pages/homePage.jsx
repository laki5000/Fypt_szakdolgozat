import React, { useEffect } from "react";
import HomeForm from "../components/homeForm";

const HomePage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <HomeForm />
    </div>
  );
};
export default HomePage;
