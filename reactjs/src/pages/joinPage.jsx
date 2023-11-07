import React from "react";
import LineWithTitle from "../components/lineWithTitle";
import JoinForm from "../components/joinForm";

const JoinPage = (props) => {
  return (
    <div>
      <div className="slide2">
        <LineWithTitle title="Csatlakozz" />
      </div>
      <div className="slide1">
        <JoinForm />
      </div>
    </div>
  );
};
export default JoinPage;
