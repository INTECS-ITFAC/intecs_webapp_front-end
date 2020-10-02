import React, { useState } from "react";
import "./secondYearProjectsHeader.scss";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("../../assets/images/secondYearProjectsCarousel/image1.jpg"),
    caption: "Second Year Projects",
    description: "Description Here",
  },
  {
    image: require("../../assets/images/secondYearProjectsCarousel/image2.jpg"),
    caption: "Second Year Projects",
    description: "Description Here",
  },
  {
    image: require("../../assets/images/secondYearProjectsCarousel/image3.jpg"),
    caption: "Second Year Projects",
    description: "Description Here",
  },
];

function SecondYearProjectHeader() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="syph-carousel-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        pause={false}
      >
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <div
                className="carousel-inner-content"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.7)), url(" +
                    String(slide.image) +
                    ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <Carousel.Caption>
                  <h3>{slide.caption}</h3>
                  <p>{slide.description}</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SecondYearProjectHeader;
