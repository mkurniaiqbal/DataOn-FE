import React from "react";
import { Row, Col, Image, Dropdown, Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.jpeg";
import "./style.css";
function HeaderLogin() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a>Bahasa (IDN)</a>,
        },
      ]}
    />
  );
  return (
    <div>
      <Row>
        <Image src={logo} style={{ width: 120, height: 50 }} />
        <Col span={8} className="Header">
          <Row>Human Resources Information System</Row>
          <Row className="titleHeader">SunFish 7</Row>
        </Col>
        <Col offset={10}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="titleLanguage">
                English (EN)
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderLogin;
