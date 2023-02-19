import React from "react";

import { Carousel } from "antd";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  objectFit: "cover",
  maxWidth: "100%",
};
export default function CarouselMovie() {
  return (
    <Carousel autoplay>
      <div>
        <img
          style={contentStyle}
          src="https://cdn.galaxycine.vn/media/2023/1/14/chi-chi-em-em-2-3_1673710348053.jpg"
          alt="#"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="data:image/jpeg;base64,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"
          alt="#"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://cdn.galaxycine.vn/media/2023/1/14/chi-chi-em-em-2-3_1673710348053.jpg"
          alt="#"
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://cdn.galaxycine.vn/media/2023/1/14/chi-chi-em-em-2-3_1673710348053.jpg"
          alt="#"
        />
      </div>
    </Carousel>
  );
}
