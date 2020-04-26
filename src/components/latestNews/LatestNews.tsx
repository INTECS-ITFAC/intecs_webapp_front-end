import React from "react";
// @ts-ignore
// import PropTypes from 'prop-types'
import "./LatestNews.scss";
import Ticker from "react-ticker";

const News = () => (
  <div className={"latest-news-container"}>
    <div className="jumbotron-fluid" id={"breaking"}>
      Latest News:
    </div>
    <div id={"newsTicker"}>
      <Ticker mode="smooth" speed={15}>
        {({ index }) => (
          <div>
            <h2 className="jumbotron-fluid">
              This is the Headline of element {index}!<br />
            </h2>
          </div>
        )}
      </Ticker>
    </div>
  </div>
);

function LatestNews() {
  return (
    <div>
      <News />
    </div>
  );
}

export default LatestNews;
