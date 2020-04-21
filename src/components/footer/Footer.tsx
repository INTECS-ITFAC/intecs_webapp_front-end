import React from "react";
//Component imports
import Contactus from "../contactus/Contactus";
import Aboutus from "../aboutus/Aboutus";

//Style imports
import { Row, Col, Badge } from "react-bootstrap";
import Switch from "./Switch";
import "./Footer.scss";

class Footer extends React.Component<{}, { mode: string }> {
  constructor(props: any) {
    super(props);
    //I have used a state to switch between two modes 'ContactUs' and 'AboutUs'
    this.state = {
      mode: "ContactUs",
    };
  }

  switchMode = () => {
    if (this.state.mode === "AboutUs") {
      this.setState({ mode: "ContactUs" });
    } else {
      this.setState({ mode: "AboutUs" });
    }
  };

  render() {
    return (
      // Footer has been devided into two parts

      <div className="footer-container">
        {/*Part 1 - this will include dynamic content*/}
        <Row className="d-flex justify-content-center text-center align-content-center">
          <label>Contact Us</label>
          <div className="switch-class">
            <Switch
              modeValue={this.state.mode}
              onColor="#EF476F"
              handleToggle={this.switchMode}
            />
          </div>
          <label>About Us</label>
        </Row>
        {this.state.mode === "AboutUs" ? <Contactus /> : <Aboutus />}
        {/*Part 2 - this will include only text content*/}
        <div className="footer-part2"></div>
        <div className="bottom-footer-container d-inline">
          <Row className="text-center" style={{ background: "#005476" }}>
            <Col style={{ color: "#D3D3D3" }}>
              Developed by : OpenSource Community
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
