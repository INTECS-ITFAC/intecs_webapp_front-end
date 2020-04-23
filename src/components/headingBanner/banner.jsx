import React, { Component } from "react";
import Banner from "react-js-banner";
import "./banner.scss";
import logo from "./logo/frog.png";

class Heading extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Blog",
      bannerCss: { color: "white", fontSize: "50px", marginTop: "150px" },
    };
  }

  render() {
    return (
      <div>
        <Banner
          image={logo}
          imageClass="App-logo"
          title={[
            <div>
              <h1 className="jumbotron-fluid" style={this.state.bannerCss}>
                {this.state.name}
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
}

export default Heading;
