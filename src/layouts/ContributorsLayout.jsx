import React from "react";
import ContributorsNavbarComponent from "../components/navbar/ContributorsNavbar";
import Footer from "../components/footer/Footer";

const ContributorsLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          {/* <Import the nav bar for contributors page> */}
          <ContributorsNavbarComponent />
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

export default ContributorsLayout;
