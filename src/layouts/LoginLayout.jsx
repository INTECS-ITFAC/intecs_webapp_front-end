import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const LoginLayout = (ViewComponent) => {
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
          <div
            className="w-100 d-flex justify-content-center"
            style={{ background: "#334677" }}
          >
            <p style={{ color: "#D3D3D3" }}>
              Developed By :{" "}
              <Link to={"/contributes"}>Opensource Community</Link>{" "}
            </p>
          </div>
        </>
      );
    }
  };
};

export default LoginLayout;
