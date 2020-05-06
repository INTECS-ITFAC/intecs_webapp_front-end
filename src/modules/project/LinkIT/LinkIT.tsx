import React, { Component } from "react";
// import PropTypes from 'prop-types'
import StudentPostGrid from "../../../components/studentPostsGrid/PostGrid";
import "./LinkIT.scss";

export class LinkIT extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="linkIT-container">
        <div className="mb-5">LinkIT Allocated Space</div>
        <StudentPostGrid/>
      </div>
    );
  }
}

export default LinkIT;
