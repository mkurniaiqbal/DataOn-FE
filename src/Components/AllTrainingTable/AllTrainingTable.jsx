import { Table, Card, Badge, message } from "antd";
import React, { useContext } from "react";
import "./AllTrainingTable.css";
import { AppContext } from "../../Context";
import { columns } from "./AllTrainingTableData";
import Loading from "../Loading/Loading";

const AllTrainingTableView = () => {
  const { training, dataTable, totalPage, setPagination } =
    useContext(AppContext);
  if (training.isLoading) return <Loading />;
  if (training.error) return message.error("Get Data Error");

  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="titleTraining">
          All Training Event
          <Badge
            count={training.data.length}
            style={{
              backgroundColor: "#D6EFED",
              color: "#40a9ff",
              marginLeft: 8,
            }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={dataTable}
          size={"small"}
          pagination={{
            defaultCurrent: 1,
            PageSize: 10,
            size: "default",
            total: totalPage,
            onChange: (page) => {
              setPagination(page);
            },
          }}
          className="tableClass"
        />
      </Card>
    </>
  );
};

export default AllTrainingTableView;
