import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div>Footer allocated space</div>
      <div>
        Develop By : <Link to={"/contributes"}>Opensource Community</Link>{" "}
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
