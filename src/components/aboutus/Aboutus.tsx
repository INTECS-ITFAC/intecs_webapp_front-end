import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Aboutus.scss";
function Aboutus(props: any) {
  return (
    <div
      className="about-us-container container-fluid text-center text-md-left"
      style={{ backgroundColor: props.color }}
    >
      <Row>
        <Col className="col-md-6 mt-md-0 mt-">
          <h1>
            <u>Vision</u>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            sapiente sint, nulla, nihil repudiandae commodi voluptatibus
            corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
            harum esse fugiat. Itaque, culpa
          </p>
        </Col>
        <Col className="col-md-6">
          <h1>
            <u>Mission</u>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            sapiente sint, nulla, nihil repudiandae commodi voluptatibus
            corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
            harum esse fugiat. Itaque, culpa
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Aboutus;
