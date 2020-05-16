import React from "react";
import "./Contactus.scss";

function ContactUs() {
  //board details
  const boardDetails = [
    {
      post: "President",
      name: "Kalum Sampath",
      contactNum: "+94712271581",
      email: "kalumsampath@gmail.com",
    },
    {
      post: "Secretory",
      name: "Tharaka Munasinghe",
      contactNum: "+94712271581",
      email: "tharakamunasinghe@gmail.com",
    },
    {
      post: "Vice President",
      name: "Lahiru Gayantha",
      contactNum: "+94712271581",
      email: "lahirugayantha@gmail.com",
    },
  ];

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="justify-content-center d-flex flex-row text-md-left row">
        {boardDetails.map(function (profile, index) {
          return (
            <div
              className="h-100 col-lg-4 col-md-4 col-sm-6 d-flex flex-column"
              key={index}
            >
              <p className="header">
                <u>{profile.post}</u>
              </p>
              <p className="content">{profile.name}</p>
              <p className="content">{profile.contactNum}</p>
              <p className="content">{profile.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactUs;
