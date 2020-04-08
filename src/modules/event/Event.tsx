import React, { Component } from "react";
// import PropTypes from 'prop-types'
import "./Event.scss";

export class Event extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="event-container">
        <div>Allocated Space for Event </div>
        <div>Happy Cooding...! </div>
      </div>
    );
  }
}

export default Event;
