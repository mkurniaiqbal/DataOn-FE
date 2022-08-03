import React from "react";
import { Row, Col, Image, Select } from "antd";
import logo from "../../assets/logo.jpeg";
import "./style.css";
function HeaderLogin() {
  const { Option } = Select;
  return (
    <div>
      <Row justify="space-around">
        <Col>
          <Image src={logo} style={{ width: 120, height: 50 }} />
        </Col>
        <Col className="Header" flex={1}>
          <Col>Human Resources Information System</Col>
          <Col className="titleHeader">SunFish 7</Col>
        </Col>
        <Col>
          <Select
            labelInValue
            bordered={false}
            defaultValue={{
              value: "english",
              label: "English (EN)",
            }}
            style={{
              width: 150,
            }}
          >
            <Option value="indonesia">Indonesia(IDN)</Option>
            <Option value="english">English(EN)</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderLogin;
