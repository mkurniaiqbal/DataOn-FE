import React, { useContext } from "react";
import AllTraining from "../AllTrainingEvent/AllTraining";
import { AppContext } from "../../Context";
import AllTrainingTableView from "../AllTrainingTable/AllTrainingTable";

function ToggleView() {
  const { tableViews } = useContext(AppContext);
  return <div>{tableViews ? <AllTrainingTableView /> : <AllTraining />}</div>;
}

export default ToggleView;
