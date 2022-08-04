import React from "react";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Row justify="space-between">
        <Col>
          <h1>home</h1>
        </Col>
        <Col>
          <Button
            onClick={() => {
              navigate("/training/:id");
            }}
          >
            Preview
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            logout
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
