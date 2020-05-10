import React, { Component } from "react";
// import PropTypes from 'prop-types'
import "./IntecsOpenSourceProjects.scss";
import OpenSourceProjectsHeader from "../../../components/openSourceProjectsHeader/openSourceProjectsHeader";

export class IntecsOpenSourceProjects extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="intecs-open-source-projects-container">
        <OpenSourceProjectsHeader />
      </div>
    );
  }
}

export default IntecsOpenSourceProjects;
