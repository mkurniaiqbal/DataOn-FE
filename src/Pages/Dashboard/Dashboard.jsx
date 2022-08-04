import React from "react";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Row justify="space-between">
        <Col>
          <h1>Dashboard</h1>
        </Col>
        <Col>
          <Button
            onClick={() => {
              navigate("/login");
              localStorage.clear();
            }}
          >
            Logout
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
