import { React, useState } from "react";
import { Card, Button, Col, Row, Image, Modal } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  EnvironmentTwoTone,
} from "@ant-design/icons";
import "./MyTrainingEventCom.css";
import instace from "../../API";
import { useNavigate } from "react-router-dom";
import { formatDate, formatEndDate } from "../../Utils/FormatDate";

const MyTrainingEventCom = (props) => {
  const navigate = useNavigate();
  const item = props.item;
  const key = props.id;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onDeleteShow = () => {
    setIsModalVisible(false);
    setIsConfirmVisible(true);
  };

  const onCancelDelete = () => {
    setIsConfirmVisible(false);
  };

  const onSubmitDelete = () => {
    const id = item.id;
    const response = instace.delete(`/my-training/${id}`);
    response
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch(() => {
        navigate("/notFound");
      });
  };

  return (
    <>
      <Card
        key={key}
        className="tainingCard"
        hoverable
        style={{
          borderRadius: 12,
          maxWidth: 400,
        }}
        bodyStyle={{ padding: "0" }}
      >
        <Row className="cardTrainingEvent" onClick={showModal}>
          <Col>
            <Image width={150} height={140} src={item.image} />
          </Col>
          <Col className="textContent">
            <p className="tLocation">
              <EnvironmentOutlined className="iconCard" />
              {item.location}
            </p>
            <h3 className="tTitle">{item.eventName}</h3>
            <p className="tDate">
              {formatDate(item.startDate)} - {formatEndDate(item.endDate)}
            </p>
            <p className="tUser">
              <UserOutlined className="iconCard" />
              {item.speaker}
            </p>
          </Col>
        </Row>
        <Row className="cardTrainingFooter" justify="space-between">
          <Col>
            <h4 className="textFooter">Event Start</h4>
          </Col>
          <Col>
            <Button type="primary" size="small">
              <EnvironmentTwoTone />
              View Location
            </Button>
          </Col>
        </Row>
      </Card>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="delete" type="danger" onClick={onDeleteShow}>
            Delete
          </Button>,
          <Button key="back" onClick={handleCancel} type="primary">
            Kembali
          </Button>,
        ]}
      >
        <Row className="cardTrainingEvent">
          <Col>
            <Image width={150} height={140} src={item.image} />
          </Col>
          <Col className="textContent">
            <p className="tLocation">
              <EnvironmentOutlined className="iconCard" />
              {item.location}
            </p>
            <h3 className="tTitle">{item.eventName}</h3>
            <p className="tDate">
              {formatDate(item.startDate)} - {formatEndDate(item.endDate)}
            </p>
            <p className="tUser">
              <UserOutlined className="iconCard" />
              {item.speaker}
            </p>
          </Col>
        </Row>
      </Modal>
      <Modal
        title="Modal"
        onCancel={onCancelDelete}
        visible={isConfirmVisible}
        footer={[
          <Button key="delete" type="danger" onClick={onCancelDelete}>
            No
          </Button>,
          <Button key="back" onClick={onSubmitDelete} type="primary">
            Yes
          </Button>,
        ]}
      >
        <h2>Apakah kamu yakin ingin menghapus {item.trainingName}</h2>
      </Modal>
    </>
  );
};

export default MyTrainingEventCom;
