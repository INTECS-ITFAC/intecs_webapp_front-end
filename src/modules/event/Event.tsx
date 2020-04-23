import React, { Component } from "react";
// import PropTypes from 'prop-types'
import "./Event.scss";
import Heading from "../../components/headingBanner/banner";

export class Event extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="event-container">
        <div>
          <Heading />
        </div>
        <div>Allocated Space for Event </div>
      </div>
    );
  }
}

export default Event;
