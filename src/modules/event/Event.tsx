import React, { Component } from "react";

//Styling
import "./Event.scss";

//Components
import Heading from "../../components/headingBanner/banner";
import EventPagination from "../../components/pagination/EventPagination";
import RightNavBar from "../../components/rightsidebar/Rightsidebar";
import LeftSideBar from "../../components/sidebar/leftsidebar/LeftSideBar";

export class Event extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="event-container">
        <Heading />
        <div className="row w-100 ml-0 mr-0">
          <div className="col-3  pl-1 pr-1">
            <LeftSideBar />
          </div>
          <div className="col-6 ">
            <EventPagination />
          </div>
          <div className="col-3 ">
            <RightNavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
