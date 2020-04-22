import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SocialBar() {
  const linkDetails = [
    {
      name: "facebook",
      url: "https://www.facebook.com",
    },
    {
      name: "twitter",
      url: "https://www.twitter.com",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com",
    },
    {
      name: "github",
      url: "https://github.com",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com",
    },
    {
      name: "dribble",
      url: "https://dribbble.com",
    },
  ];

  return (
    <Row className="d-flex justify-content-center">
      {linkDetails.map(function (webIcon, i) {
        return (
          <Col>
            <SocialIcon
              className="socialIcon"
              fgColor={"#ffffff"}
              network={webIcon.name}
              style={{ height: 80, width: 80 }}
              url={webIcon.url}
            />
          </Col>
        );
      })}
    </Row>
  );
}
