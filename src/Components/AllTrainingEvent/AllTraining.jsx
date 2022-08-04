import React, { useContext } from "react";
import CardTrainingEvent from "./CardTrainingEvent";
import { Card, Badge, List, Row, Col, message } from "antd";
import { AppContext } from "../../Context";
import Loading from "../Loading/Loading";

const AllTraining = () => {
  const { training } = useContext(AppContext);
  if (training.isLoading) return <Loading />;
  if (training.error) return message.error("Get Data Error");

  return (
    <div>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
        title={
          <Badge
            title="All training Events"
            count={training.data.length}
            offset={[23, 16]}
            color="#e6f7ff"
            style={{
              backgroundColor: "#D6EFED",
              color: "#40a9ff",
              marginTop: 23,
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: 8,
              }}
            >
              All Training Event
            </div>
          </Badge>
        }
      >
        <List
          grid={{
            gutter: 8,
            xs: 2,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
          }}
          dataSource={training.data}
          renderItem={(item) => (
            <List.Item>
              <Row justify="space-between">
                <Col ant-col-xs-24 ant-col-xl-8>
                  <CardTrainingEvent {...item} />
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default AllTraining;
