import React from "react";
import { Link } from "react-router-dom";
import "./DashboardSidebar.scss";

export default function DashboardSidebar() {
  return (
    <div className="dashboard-sidebar-container">
      <h1>Dashboard</h1>
      <ul>
        <li>user Avatar</li>
        <li>Name</li>
      </ul>

      <React.Fragment>
        <Link to={"/dashboard/newsManagement"}>
          <li>
            <a href="#/">{"News"}</a>
          </li>
        </Link>
        <Link to={"/dashboard/eventManagement"}>
          <li>
            <a href="#/">{"Event"}</a>
          </li>
        </Link>
        <Link to={"/dashboard/eventFlowManagement"}>
          <li>
            <a href="#/">{"Event Flow"}</a>
          </li>
        </Link>
        <Link to={"/dashboard/projectManagement"}>
          <li>
            <a href="#/">{"Project"}</a>
          </li>
        </Link>
      </React.Fragment>
    </div>
  );
}
