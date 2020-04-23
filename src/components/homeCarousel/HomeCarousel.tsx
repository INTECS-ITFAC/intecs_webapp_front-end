import React, {useState} from "react";
// import PropTypes from 'prop-types'
import "./HomeCarousel.scss";
import Carousel from 'react-bootstrap/Carousel';
// import Image1 from "../../assets/images/carousel/image1.jpg";
const Image1 = require('../../assets/images/carousel/image1.jpg');
const Image2 = require('../../assets/images/carousel/image2.jpg');
const Image3 = require('../../assets/images/carousel/image3.jpg');
const Image4 = require('../../assets/images/carousel/image4.jpg');
const Image5 = require('../../assets/images/carousel/image5.jpg');


function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home-carousel-container">      
      {/* <div>Home Carousel Allocated space</div> */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>        
        <img
          className="d-block w-100"
          src={String(Image1)}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={String(Image2)}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={String(Image3)}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src={String(Image4)}
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h3>Forth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>        
        <img
          className="d-block w-100"
          src={String(Image5)}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
 
}

// HomeCarousel.propTypes = {

// }

export default HomeCarousel;
