import React, { Component } from "react";
import SecondYearProjectHeader from "../../../../components/secondYearProjectsHeader/secondYearProjectsHeader";
import "./secondYearProjects.scss";
//import Heading from "./headerSW/headersw";

class SecondYearProjects extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="students-work-container">
        <SecondYearProjectHeader />
      </div>
    );
  }
}

export default SecondYearProjects;
