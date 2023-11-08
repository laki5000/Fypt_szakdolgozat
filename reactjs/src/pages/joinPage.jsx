import React, { useEffect } from "react";
import JoinForm from "../components/joinForm";

const JoinPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <JoinForm />
    </div>
  );
};
export default JoinPage;
