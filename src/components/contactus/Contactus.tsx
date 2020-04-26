import React from "react";
import "./Contactus.scss";

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
      className="contact-us-container justify-content-center d-flex flex-row text-md-left row"
      style={{ backgroundColor: props.color }}
    >
      {boardDetails.map(function (profile, index) {
        return (
          <div
            className="h-100 col-lg-4 col-md-4 col-sm-6 d-flex flex-column"
            key={index}
          >
            <p className="header">
              <u>{profile.post}</u>
            </p>
            <p>{profile.name}</p>
            <p>{profile.contactNum}</p>
            <p>{profile.email}</p>
          </div>
        );
      })}
    </div>
  );
}

// Contactus.propTypes = {

// }

export default Contactus;
