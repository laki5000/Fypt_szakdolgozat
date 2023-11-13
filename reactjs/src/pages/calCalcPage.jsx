import React, { useEffect } from "react";

const CalCalcPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return <div>CalCalc Page</div>;
};
export default CalCalcPage;
