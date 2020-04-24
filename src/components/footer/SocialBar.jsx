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
  ];

  return (
    <div className="test w-100 pl-0 pr-0 ml-0  d-flex flex-row  p-1">
      {linkDetails.map(function (webIcon, i) {
        return (
          <div className="col-2 pl-0 pr-0 text-center d-flex justify-content-center">
            <SocialIcon
              className="socialIcon"
              fgColor={"#ffffff"}
              network={webIcon.name}
              style={{ height: 80, width: 80 }}
              url={webIcon.url}
            />
          </div>
        );
      })}
    </div>
  );
}
