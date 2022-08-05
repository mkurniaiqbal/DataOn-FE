import React, { useContext } from "react";
import "./MyTrainingEvent.css";
import { Card, Badge, message } from "antd";
import MyTrainingEventCom from "./MyTrainingEventCom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppContext } from "../../Context";
import Loading from "../Loading/Loading";
import { responsive } from "./MyTrainingEventData";

function MyTrainingEvent() {
  const { myTraining } = useContext(AppContext);
  if (myTraining.isLoading) return <Loading />;
  if (myTraining.error) return message.error("Get Data Filed");

  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="titleTraining">
          My Training Event{" "}
          <Badge
            className="site-badge-count-109"
            count={myTraining.data.length}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <div className="carousel">
          <Carousel responsive={responsive}>
            {myTraining.data.map((item, id) => (
              <MyTrainingEventCom key={id} item={item} />
            ))}
          </Carousel>
        </div>
      </Card>
    </>
  );
}

export default MyTrainingEvent;
