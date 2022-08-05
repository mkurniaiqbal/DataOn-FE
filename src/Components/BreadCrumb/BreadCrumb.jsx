import React from "react";
import { Breadcrumb, Card, Row, Col, Button, Menu, Dropdown } from "antd";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function BreadCrumb() {
  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/Login");
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Button style={{ border: "none" }} onClick={handleClick}>
          Signout
        </Button>
      </Menu.Item>
    </Menu>
  );

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbNameMaps = {
    "/": "Dashboard",
    "/training/create": "Create Training",
    [`/training/${params.id}/edit`]: "Edit Training",
  };
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>{breadcrumbNameMaps[url]}</Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key={"/"}>
      <Link to="/">Dashboard</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Card
      className="card"
      style={{
        margin: "0px 10px 10px 10px",
        borderRadius: "10px",
      }}
    >
      <Row className="row__card" justify="space-between">
        <Col className="col__breadcrumb">
          <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
        </Col>

        <Row justify="space-between">
          <Col>
            <Link to="/training/create">
              <Button
                type="primary"
                style={{
                  borderRadius: "5px",
                }}
              >
                <PlusOutlined /> Create Training Event
              </Button>
            </Link>
          </Col>

          <Col style={{ marginLeft: "10px" }}>
            <Dropdown overlay={menu}>
              <Button>
                <MoreOutlined /> More
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </Row>
    </Card>
  );
}

export default BreadCrumb;
