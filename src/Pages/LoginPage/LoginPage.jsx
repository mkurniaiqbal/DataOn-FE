import { Row, Card, Col } from "antd";
import React from "react";
import "./LoginPage.css";
import HeaderLogin from "../../Components/HeaderLogin";
import CarouselLogin from "../../Components/CarouselLogin";
import HeaderForm from "../../Components/HeaderForm";
import FormLogin from "../../Components/FormLogin";
import FooterLogin from "../../Components/FooterLogin";

function LoginPage() {
  return (
    <Card style={{ background: "aquamarine" }}>
      <Card bordered={false} style={{ margin: 0, borderRadius: 5 }}>
        <HeaderLogin />
        <Row gutter={20}>
          <Col span={14}>
            <CarouselLogin />
          </Col>
          <Col span={10}>
            <Row>
              <Col span={14}>
                <HeaderForm />
              </Col>
            </Row>
            <FormLogin />
          </Col>
        </Row>
        <FooterLogin />
      </Card>
    </Card>
  );
}

export default LoginPage;
