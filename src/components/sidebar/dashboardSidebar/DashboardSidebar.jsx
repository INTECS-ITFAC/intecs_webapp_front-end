import React from "react";
import "./DashboardSidebar.scss";
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";
import {
  EventNote,
  ListAlt,
  School,
  AccountTree,
  AnnouncementOutlined,
  BookOutlined,
} from "@material-ui/icons";

function DashboardSidebar(props) {
  return (
    <div className="dashboard-sidebar-container">
      <Nav
        variant="pills"
        className="flex-column"
        activeKey={props.location.pathname}
      >
        <Nav.Link href="/dashboard/eventManagement" className="link-div">
          <EventNote /> Event Management
        </Nav.Link>
        <Nav.Link href="/dashboard/eventFlowManagement" className="link-div">
          <ListAlt /> Flow Management
        </Nav.Link>
        <Nav.Link href="/dashboard/newsManagement" className="link-div">
          <AnnouncementOutlined /> News Management
        </Nav.Link>
        <Nav.Link href="/dashboard/linkIT" className="link-div">
          <BookOutlined /> LinkIT
        </Nav.Link>
        <Nav.Link href="/dashboard/addStudentWork" className="link-div">
          <School /> Add Student Work
        </Nav.Link>
        <Nav.Link href="/dashboard/openSourceManagement" className="link-div">
          <AccountTree /> Open Source Management
        </Nav.Link>
      </Nav>
    </div>
  );
}

const SideNavWithRouter = withRouter(DashboardSidebar);

export default SideNavWithRouter;
