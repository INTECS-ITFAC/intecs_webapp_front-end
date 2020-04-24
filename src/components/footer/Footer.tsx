import React from "react";
import { Link } from "react-router-dom";

//Component imports
import Contactus from "../contactus/Contactus";
import Aboutus from "../aboutus/Aboutus";
import SocialBar from "./SocialBar";
import Switch from "./Switch";

//Style imports
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
        className="footer-container"
        style={{ backgroundColor: this.state.primaryColor }}
      >
        {/*Footer-part I this will include the switch*/}
        <div className="row w-100 align-items-center justify-content-center">
          <label>Contact Us</label>
          <Switch
            modeValue={this.state.mode}
            onColor={this.state.secondaryColor}
            handleToggle={this.switchMode}
          />
          <label>About Us</label>
        </div>
        {/*Footer-part II will include Content*/}
        <div className="dynamic-footer row ">
          {this.state.mode === "AboutUs" ? (
            <Contactus color={this.state.primaryColor} />
          ) : (
            <Aboutus color={this.state.primaryColor} />
          )}
        </div>
        {/*Footer-part III will include Social Bar and two logos*/}
        <div className="w-100 ml-0 mr-0 justify-content-center d-flex flex-row row mt-1 pt-1">
          <div className="col-2 justify-content-center pl-0 pr-0 text-center">
            <img
              id="uom"
              src={require("../../assets/images/uom_logo.png")}
              className="logoIcon"
              alt="UOM"
            />
          </div>
          <div className="col-8 pl-0 pr-0 d-flex flex-column justify-content-center align-items-center">
            <SocialBar />
            <div className="justify-content-center pl-0 pr-0 d-flex row">
              <p className="textClass">
                Information Technology Society | University of Moratuwa
              </p>
            </div>
          </div>
          <div className="col-2 justify-content-center text-center pl-0 pr-0">
            <img
              id="INTECS"
              src={require("../../assets/images/intecs_logo.png")}
              className="logoIcon"
              alt="INTECS"
            />
          </div>
        </div>
        <div
          className="w-100 d-flex justify-content-center"
          style={{ background: this.state.primaryColor }}
        >
          <p style={{ color: "#D3D3D3" }}>
            Developed By : <Link to={"/contributes"}>Opensource Community</Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
