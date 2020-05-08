import React from "react";
// @ts-ignore
// import PropTypes from 'prop-types'
import "./LinkItHeader.scss";

function LinkItHeader() {
  return (
    <div className="header-banner">
      <div className="header-banner-section">
        <h1>LinkIT - FIT Knowledge Sharing Program</h1>
        <div className="header-btn-container">
          <a href="https://forms.gle/xFpE5kX1Zj3fHReo6">
            <div className="header-btn text-center">Add you blog</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinkItHeader;
