import React from "react";
//import PropTypes from "prop-types";
import { Row, Col, Card } from "react-bootstrap";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container d-inline">
      <Row className="text-center" style={{ background: "#005476" }}>
        <Col style={{ color: "#D3D3D3" }}>
          Developed by : OpenSource Community
        </Col>
      </Row>
    </div>
    // <div className="footer-container">
    //     <p className='align-content-center'>
    //         Developed By : OpenSource Community
    //     </p>
    //
    // </div>
  );
}

Footer.propTypes = {};

export default Footer;
