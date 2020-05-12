import React from "react";
import Navbar from "../components/navbar/Navbar";
import AdminNavBar from "../components/adminNavBar/AdminNavBar";
import SideNavWithRouter from "../components/sidebar/dashboardSidebar/DashboardSidebar";

const DashboardLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          {/* <Import the nav bar> */}

          <AdminNavBar />

          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <SideNavWithRouter />

            {/* <div style={{ overflowX: 'scroll' }}> */}
            <ViewComponent />
            {/* </div> */}
          </div>
        </>
      );
    }
  };
};

export default DashboardLayout;
