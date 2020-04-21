import React from "react";
//Component imports
import Contactus from "../contactus/Contactus";
import Aboutus from "../aboutus/Aboutus";
//Style imports
import { Col, Row } from "react-bootstrap";
import Switch from "./Switch";
import "./Footer.scss";

//Social Icons

class Footer extends React.Component<{}, { mode: string }> {
  // const facebookUrl = "www.facebook.com";

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

        <div className="footer-part2">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <img
                  src={require("../../assets/images/social_icons/facebook.png")}
                  className="socialIcon"
                  alt="Facebook"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <img
                  src={require("../../assets/images/social_icons/dribble.png")}
                  className="socialIcon"
                  alt="Dribble"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1">
                <img
                  src={require("../../assets/images/social_icons/linkedin.png")}
                  className="socialIcon"
                  alt="Linkedin"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <img
                  src={require("../../assets/images/social_icons/twitter.png")}
                  className="socialIcon"
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <img
                  src={require("../../assets/images/social_icons/youtube.png")}
                  className="socialIcon"
                  alt="Youtube"
                />
              </a>
            </li>
          </ul>
        </div>

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
