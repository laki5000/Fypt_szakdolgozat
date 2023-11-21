import React, { useEffect } from "react";
import CalCalcForm from "../components/calCalcForm";

const CalCalcPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <CalCalcForm />
    </div>
  );
};
export default CalCalcPage;
