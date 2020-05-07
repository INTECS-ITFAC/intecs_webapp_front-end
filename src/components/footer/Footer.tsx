import React from "react";
import { Link } from "react-router-dom";

//Component imports
import SocialBar from "./SocialBar";
import ContactUs from "../contactus/ContactUs";

//Style imports
import "./Footer.scss";

function Footer() {
  const primaryColor = "#334677";

  return (
    <div className="footer-container" style={{ backgroundColor: primaryColor }}>
      <ContactUs />

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
        style={{ background: primaryColor }}
      >
        <p style={{ color: "#D3D3D3" }}>
          Developed By : <Link to={"/contributes"}>Opensource Community</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
