import React, { Component } from "react";
import "./StudentsWork.scss";
import Heading from "./headerSW/headersw";

export class StudentsWork extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="students-work-container">
        <Heading />
        <div>Students' Work Allocated Space</div>
      </div>
    );
  }
}

export default StudentsWork;
