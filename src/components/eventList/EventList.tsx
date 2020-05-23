import React from "react";
// import PropTypes from 'prop-types'
import "./EventList.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function EventList() {
  const UpcomingEvents = [
    {
      title: "JAVA SCRIPT",
      body: " User Experience-Visual Design User Experience-Visual Design ",
    },
    {
      title: "WEB DEVELOPMENT",
      body: "Visual Direction-User Experience User Experience-Visual Design",
    },
    {
      title: "JAVA SCRIPT",
      body: " User Experience, Visual Design User Experience-Visual Design",
    },
  ];

  const currentEventTitle = "WEB DESIGNING";
  const currentEventbody =
    "Visual Direction-User Experience User Experience-Visual Design";

  return (
    <div className="event-list-container">
      <h2 className="header-of-event-list-container"> EVENTS FLOW</h2>
      <VerticalTimeline className="vertical-time-line">
        {/*Current Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020-April"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div className="element-content">
            <h5 className="vertical-timeline-element-title">
              {currentEventTitle}
            </h5>
            <br></br>
            <div> {currentEventbody}</div>
          </div>
        </VerticalTimelineElement>

        {/*Upcoming Events */}
        {UpcomingEvents.map((key) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-May"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          >
            <div className="element-content">
              <h5 className="vertical-timeline-element-subtitle">
                {key.title}
              </h5>
              <br></br>
              <div className="upcoming-events-body-text-color"> {key.body}</div>
            </div>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
}

// EventList.propTypes = {

// }

export default EventList;
