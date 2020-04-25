import React, { Component } from "react";
import "./Event.scss";
import Heading from "../../components/headingBanner/banner";
import EventPagination from "../../components/pagination/EventPagination";
import { Row, Col, Container } from "react-bootstrap";
import RightNavBar from "../../components/rightsidebar/Rightsidebar";

export class Event extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="event-container">
        <div>
          <Heading />
        </div>
        <Container fluid>
          <Row>
            <Col className="col-md-3" style={{ background: "#fff" }}>
              <div>Allocated space for leftsidebar</div>
            </Col>
            <Col className="col-md-6 text-center">
              <EventPagination />
            </Col>
            <Col className="col-md-3">
              <RightNavBar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Event;
