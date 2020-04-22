import React, { Component } from "react";
// import PropTypes from 'prop-types'
import "./Event.scss";
import EventPagination from "../../components/pagination/EventPagination";

export class Event extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="event-container">
        <div>Allocated Space for Event </div>
        <EventPagination />
      </div>
    );
  }
}

export default Event;
