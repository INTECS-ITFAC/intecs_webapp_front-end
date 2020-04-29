import React from "react";
import "./Aboutus.scss";

function Aboutus(props: any) {
  return (
    <div
      className="w-100 about-us-container justify-content-center align-items-center d-flex flex-row row"
      style={{ backgroundColor: props.color }}
    >
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="header">
          <u>Vision</u>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          sapiente sint, nulla, nihil repudiandae commodi voluptatibus
        </p>
      </div>
      <hr className="clearfix w-100 d-md-none pb-3" />
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="header">
          <u>Mission</u>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          sapiente sint, nulla, nihil repudiandae commodi voluptatibus corrupti
          animi sequi aliquid magnam debitis, maxime quam recusandae harum esse
          fugiat. Itaque, culpa
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
