import React from "react";
import "./banner.scss";
import logo from "./logo/frog.png";

function Heading() {
  return (
    <div className="banner">
      <img src={logo} className="logo" alt="logo" />
      <h1>Blog</h1>
      <h5>A blog project by Ben</h5>
    </div>
  );
}

export default Heading;
