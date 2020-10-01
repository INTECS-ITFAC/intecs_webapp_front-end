import React, { Component } from "react";
import "./firstYearProjects.scss";
import Heading from "../headerSW/headersw";
import FirstYearCarousel from "./carousel/carousel";

class FirstYearProjects extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="students-work-container">
        <Heading />
        <div className="wrap-div">
          <FirstYearCarousel />
          <div className="title-div">
            <h4>First Year Projects</h4>
          </div>
        </div>
        <div>Project grid goes here</div>
      </div>
    );
  }
}

export default FirstYearProjects;
