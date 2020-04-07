import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const LandingLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          {/* <Import the nav bar> */}
          <Navbar />
          <div>
            <ViewComponent />
          </div>
          {/* <Import the Footer /> */}
          <Footer />
        </>
      );
    }
  };
};

export default LandingLayout;
