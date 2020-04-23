import React from "react";
// @ts-ignore
import Banner from "react-js-banner";
import "./banner.scss";
import logo from "./logo/frog.png";

function Heading() {
  return (
    <div>
      <Banner
        image={logo}
        imageClass="App-logo"
        title={[
          <div>
            <h1 className="jumbotron-fluid" id="text">
              Blog
            </h1>
            <div>
              <p className="lead" style={{ fontFamily: "Segoe UI" }}>
                A blog project by Ben
              </p>
            </div>
          </div>,
        ]}
      />
    </div>
  );
}

export default Heading;
