import React from "react";
import LineWithTitle from "../components/lineWithTitle";
import JoinForm from "../components/joinForm";

const JoinPage = (props) => {
  return (
    <div>
      <div>
        <LineWithTitle title="Csatlakozz"/>
      </div>
      <div>
        <JoinForm/>
      </div>
    </div>
  );
}
export default JoinPage;