import React, { useEffect } from "react";
import TrainersAndUsers from "../components/trainersAndUsers";

const TrainersPage = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div>
      <TrainersAndUsers />
    </div>
  );
};
export default TrainersPage;
