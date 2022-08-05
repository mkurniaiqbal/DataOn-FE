import React, { useContext } from "react";
import AllTraining from "../AllTrainingEvent/AllTraining";
import { AppContext } from "../../Context";
import AllTrainingTableView from "../AllTrainingTable/AllTrainingTable";
import MyTrainingTable from "../MyTrainingTable/MyTrainingTable";
import MyTrainingEvent from "../MyTrainingEvent/MyTrainingEvent";

function ToggleView() {
  const { tableViews } = useContext(AppContext);
  return (
    <div>
      {tableViews ? <MyTrainingTable /> : <MyTrainingEvent />}
      {tableViews ? <AllTrainingTableView /> : <AllTraining />}
    </div>
  );
}

export default ToggleView;
