import React from "react";
import LineWithTitle from "../components/lineWithTitle";
import Trainers from "../components/trainers";

const TrainersPage = (props) => {
  return (
    <div>
      <div>
        <LineWithTitle title="Edzőink"/>
      </div>
      <div>
        <Trainers/>
      </div>
    </div>
  );
}
export default TrainersPage;