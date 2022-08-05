import { Table, Card, Badge } from "antd";
import React from "react";
import "./MyTrainingTable.css";
import { AppContext } from "../../Context";
import { columns } from "./MyTrainingTableData";

const MyTrainingTable = () => {
  const { myTraining } = React.useContext(AppContext);
  if (myTraining.isLoading) return <p>loading...</p>;

  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="titleTraining">
          My Training Event{" "}
          <Badge
            className="site-badge-count-109"
            count={myTraining.data.length}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={myTraining.data}
          size={"small"}
          pagination={{
            defaultPageSize: 10,
            size: "default",
          }}
          className="tableClass"
        />
      </Card>
    </>
  );
};

export default MyTrainingTable;
