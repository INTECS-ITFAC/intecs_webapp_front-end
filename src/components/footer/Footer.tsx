import React from "react";
import { Link } from "react-router-dom";

//Component imports
import Contactus from "../contactus/Contactus";
import Aboutus from "../aboutus/Aboutus";
import SocialBar from "./SocialBar";
import Switch from "./Switch";

//Style imports
import { Col, Row } from "react-bootstrap";
import "./Footer.scss";

class Footer extends React.Component<
  {},
  { mode: string; primaryColor: string; secondaryColor: string }
> {
  // const facebookUrl = "www.facebook.com";

  constructor(props: any) {
    super(props);
    //I have used a state to switch between two modes 'ContactUs' and 'AboutUs'
    this.state = {
      mode: "ContactUs",
      primaryColor: "#334677",
      secondaryColor: "#56628d",
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

      <div
        className="footer-container container-fluid "
        style={{ backgroundColor: this.state.primaryColor }}
      >
        {/*Part 1 - this will include dynamic content*/}
        <Row className="d-flex justify-content-center text-center align-content-center">
          <label>Contact Us</label>
          <div className="switch-class">
            <Switch
              modeValue={this.state.mode}
              onColor={this.state.secondaryColor}
              handleToggle={this.switchMode}
            />
          </div>
          <label>About Us</label>
        </Row>
        {this.state.mode === "AboutUs" ? (
          <Contactus color={this.state.primaryColor} />
        ) : (
          <Aboutus color={this.state.primaryColor} />
        )}
        {/*Part 2 - this will include Social Bar and Text Content*/}
        <div
          className="footer-part2 container-fluid d-flex justify-content-center align-items-center"
          style={{ backgroundColor: this.state.primaryColor }}
        >
          <SocialBar />
        </div>

        <div
          className="bottom-footer-container d-inline"
          style={{ backgroundColor: this.state.primaryColor }}
        >
          <Row
            className="row-cols-3 d-flex justify-content-center"
            style={{ backgroundColor: this.state.primaryColor }}
          >
            <Col className="d-flex justify-content-center col-md-2">
              <img
                id="uom"
                src={require("../../assets/images/uom_logo.png")}
                className="logoIcon"
                alt="UOM"
              />
            </Col>
            <Col className="d-flex justify-content-center align-content-center col-md-8 ">
              <p className="textClass">
                Information Technology Society | University of Moratuwa
              </p>
            </Col>
            <Col className="d-flex justify-content-center col-md-2">
              {" "}
              <img
                id="INTECS"
                src={require("../../assets/images/intecs_logo.png")}
                className="logoIcon"
                alt="INTECS"
              />
            </Col>
          </Row>
          <Row
            className="text-center"
            style={{ background: this.state.primaryColor }}
          >
            <Col style={{ color: "#D3D3D3" }}>
              Develop By : <Link to={"/contributes"}>Opensource Community</Link>{" "}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
