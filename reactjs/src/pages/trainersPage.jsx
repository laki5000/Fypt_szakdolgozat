import React, { useEffect } from "react";

import Trainers from "../components/trainers";

const TrainersPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <Trainers />
    </div>
  );
};
export default TrainersPage;
