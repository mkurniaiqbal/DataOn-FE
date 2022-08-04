import React from "react";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const roles = localStorage.getItem("roles");
  return (
    <div>
      <Row justify="space-between">
        <Col>
          <h1>Dashboard</h1>
        </Col>
        <Col>
          <Button
            onClick={() => {
              navigate("/training/create");
            }}
          >
            Create Training
          </Button>
        </Col>
        <Col>
          {roles === "ROLE_ADMIN" && (
            <Button
              onClick={() => {
                navigate("/training/:id/edit");
              }}
            >
              Edit
            </Button>
          )}
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
