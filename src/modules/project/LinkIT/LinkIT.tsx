import React, { Component } from "react";
// import PropTypes from 'prop-types'
import StudentPostGrid from "../../../components/studentPostsGrid/PostGrid";
import "./LinkIT.scss";
import LinkItHeader from "../../../components/linkItHeader/LinkItHeader";

export class LinkIT extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="linkIT-container">
        <LinkItHeader />
        <StudentPostGrid />
      </div>
    );
  }
}

export default LinkIT;
