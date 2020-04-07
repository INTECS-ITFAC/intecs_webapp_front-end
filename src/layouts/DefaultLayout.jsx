import React, { Component } from "react";

const LandingLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          {/* <Import the nav bar> */}
          <div>
            <ViewComponent />
          </div>
          {/* <Import the Footer /> */}
        </>
      );
    }
  };
};

export default LandingLayout;
