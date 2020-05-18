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
        <Nav.Link href="/dashboard/eventManagement" className="link-div">
          Event Management
        </Nav.Link>
        <Nav.Link href="/dashboard/eventFlowManagement" className="link-div">
          Flow Management
        </Nav.Link>
        <Nav.Link href="/dashboard/newsManagement" className="link-div">
          News Management
        </Nav.Link>
        <Nav.Link href="/dashboard/linkIT" className="link-div">
          LinkIT
        </Nav.Link>
        <Nav.Link href="/dashboard/addStudentWork" className="link-div">
          Add Student Work
        </Nav.Link>
        <Nav.Link href="/dashboard/openSourceManagement" className="link-div">
          Open Source Management
        </Nav.Link>
      </Nav>
    </div>
  );
}

const SideNavWithRouter = withRouter(DashboardSidebar);

export default SideNavWithRouter;
