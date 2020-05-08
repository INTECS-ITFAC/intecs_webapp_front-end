import React from "react";
import "./headersw.scss";
import he1 from "./logo/bgoverlay.png";
//import he1 from "./logo/sworks.jpg";

function Heading() {
  return (
    <div className="he">
      <img src={he1} className="he1" alt="logo" />

      <h1>Student work's showcase</h1>
      <h5>
        we all want to change the world!This is the best place to showcase your
        effort for that
      </h5>

      <button>submit your work</button>
    </div>
  );
}

export default Heading;
