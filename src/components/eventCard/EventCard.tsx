import React, { useState } from "react";
import Collapsible from "@kunukn/react-collapse";
import "./EventCard.scss";

// @ts-ignore
export default function EventCard({ event }) {
  const [isOpen, setOpen] = useState(false);

  const imgDivStyle = {
    backgroundImage: "url(" + event.imgUrl + ")",
  };

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <div>
      <div className="card event-card">
        <div className="card-header">
          <div className="card-title">
            <h3>{event.title}</h3>
          </div>
          <div className="card-subtitle">{event.date}</div>
        </div>
        <div className="img-div" style={imgDivStyle} />
        <Collapsible
          transition="height 280ms cubic-bezier(0.4, 0, 0.2, 1)"
          isOpen={isOpen}
          collapseHeight="60px"
          className={
            "app__collapse app__collapse--gradient " +
            (isOpen ? "app__collapse--active" : "")
          }
          render={() => <div className="app__content">{event.description}</div>}
        ></Collapsible>
        <div className="toggle">
          <a onClick={toggle}>{isOpen ? "Show Less" : "Show More"}</a>
        </div>
      </div>
    </div>
  );
}
