import React, { useState } from "react";
import "./HomeCarousel.scss";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("../../assets/images/carousel/image1.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../../assets/images/carousel/image2.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../../assets/images/carousel/image3.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../../assets/images/carousel/image4.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("../../assets/images/carousel/image5.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home-carousel-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        pause={false}
      >
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={String(slide.image)}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
