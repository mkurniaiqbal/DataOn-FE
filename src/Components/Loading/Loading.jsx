import { Card, Spin, Row, Col } from "antd";
import React from "react";
const Loading = () => {
  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Row className="example" justify="center">
        <Col>
          <Spin size="large" tip="Loading..." />
        </Col>
      </Row>
    </Card>
  );
};

export default Loading;
