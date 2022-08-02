import React from "react";
import { Carousel, Image } from "antd";
import imgLogin5 from "../../assets/imgLogin5.jpg";
import imgLogin6 from "../../assets/imgLogin6.jpg";
import imgLogin7 from "../../assets/imgLogin7.jpg";
import imgLogin8 from "../../assets/imgLogin8.jpg";
import "./style.css";

function CarouselLogin() {
  const contentStyle = {
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <Image src={imgLogin6} preview={false} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={imgLogin5} preview={false} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={imgLogin7} preview={false} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={imgLogin8} preview={false}></Image>
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselLogin;
