import React from "react";
import "./DashboardSidebar.scss";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";

function DashboardSidebar(props) {
  return (
    <div className="dashboard-sidebar-container">
      <Nav
        variant="pills"
        className="flex-column"
        activeKey={props.location.pathname}
      >
        <Nav.Link href="/dashboard/eventManagement">Event Management</Nav.Link>
        <Nav.Link href="/dashboard/eventFlowManagement">
          Flow Management
        </Nav.Link>
        <Nav.Link href="/dashboard/newsManagement">News Management</Nav.Link>
        <Nav.Link href="/dashboard/linkIT">LinkIT</Nav.Link>
        <Nav.Link href="/dashboard/addStudentWork">Add Student Work</Nav.Link>
        <Nav.Link href="/dashboard/openSourceManagement">
          Open Source Management
        </Nav.Link>
      </Nav>
    </div>
  );
}

const SideNavWithRouter = withRouter(DashboardSidebar);

export default SideNavWithRouter;
