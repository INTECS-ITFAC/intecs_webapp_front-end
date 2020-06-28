import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";

const data = [
  {
    image: require("../../../../../assets/images/firstYearProjectsCarousel/image1.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../../../../../assets/images/firstYearProjectsCarousel/image2.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../../../../../assets/images/firstYearProjectsCarousel/image3.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../../../../../assets/images/firstYearProjectsCarousel/image4.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
];

function FirstYearCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousal-div">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        pause={false}
      >
        {data.map((slide, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={String(slide.image)}
                alt="carousel image"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default FirstYearCarousel;
