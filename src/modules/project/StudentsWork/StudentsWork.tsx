import React, { Component } from "react";
// import PropTypes from 'prop-types'
import "./StudentsWork.scss";
import Heading from "./headerSW/headersw";
//import Heading from "../../../components/headingBanner/banner";

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
