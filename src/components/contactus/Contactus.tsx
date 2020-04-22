import React from "react";

// import PropTypes from 'prop-types'
import "./Contactus.scss";
import { Col, Row } from "react-bootstrap";

function Contactus(props: any) {
  //board details
  const boardDetails = [
    {
      post: "President",
      name: "Kalum Sampath",
      contactNum: "071227158",
      email: "kalumsampath@gmail.com",
    },
    {
      post: "Secretory",
      name: "Tharaka Munasinghe",
      contactNum: "071227158",
      email: "tharakamunasinghe@gmail.com",
    },
    {
      post: "Vice President",
      name: "Lahiru Gayantha",
      contactNum: "071227158",
      email: "lahirugayantha@gmail.com",
    },
  ];

  return (
    <div
      className="contact-us-container container-fluid text-center text-md-left"
      style={{ backgroundColor: props.color }}
    >
      <Row className="justify-content-center d-flex">
        {boardDetails.map(function (profile) {
          return (
            <>
              <Col className="col-md-4 mt-md-0 mt-3">
                <h1>
                  <u>{profile.post}</u>
                </h1>
                <p>{profile.name}</p>
                <p>{profile.contactNum}</p>
                <p>{profile.email}</p>
              </Col>
              <hr className="clearfix w-100 d-md-none pb-3" />
            </>
          );
        })}
      </Row>
    </div>
  );
}

// Contactus.propTypes = {

// }

export default Contactus;
