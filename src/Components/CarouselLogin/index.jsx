import React from "react";
import { Carousel, Image } from "antd";
import imgLogin5 from "../../assets/imgLogin5.svg";
import imgLogin6 from "../../assets/imgLogin6.svg";
import imgLogin7 from "../../assets/imgLogin7.svg";
import imgLogin8 from "../../assets/imgLogin8.svg";
import "./style.css";

function CarouselLogin() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <Image src={imgLogin6} preview={false} height={400} />
        </div>
        <div>
          <Image src={imgLogin5} preview={false} height={400} />
        </div>
        <div>
          <Image src={imgLogin7} preview={false} height={400} />
        </div>
        <div>
          <Image src={imgLogin8} preview={false} height={400} />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselLogin;
