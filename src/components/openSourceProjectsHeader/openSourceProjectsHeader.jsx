import React from "react";
import "./openSourceProjectsHeader.scss";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

function OpenSourceProjectsHeader() {
  return (
    <div className="open-source-header">
      <FavoriteBorderOutlinedIcon htmlColor="#cc2e72" />
      <h2>Let's find your place in the community</h2>
    </div>
  );
}

export default OpenSourceProjectsHeader;
