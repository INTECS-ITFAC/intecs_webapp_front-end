import React, { useState } from "react";
// import PropTypes from 'prop-types'
import "./LatestNews.scss";
import CompetitionImageOfHashCode from "./images/Photo.jpg";
import HashCodeImage from "./images/Hash-Code.jpg";

function LatestNews() {
  const [buttonClassID, setButtonClassID] = useState(1);

  const onChangeCompetitionsButton = () => {
    setButtonClassID(1);
  };

  const onChangeOthersButton = () => {
    setButtonClassID(0);
  };

  const competitionsList = [
    {
      id: 1,
      competitionLogo: HashCodeImage,
      competitionImage: CompetitionImageOfHashCode,
      description:
        "Hash Code is a team programming competition, organized by Google, for students and professionals around the world. You pick your team and programming language and we pick an engineering problem for you to solve. This year’s contest kicks off with an Online Qualification Round, where your team can compete from wherever you’d like, including from one of our Hash Code hubs. Top teams will then be invited to a Google office for the Final Round.",
      date: "14.04.2020",
    },
    {
      id: 2,
      competitionLogo: HashCodeImage,
      competitionImage: CompetitionImageOfHashCode,
      description:
        "Hash Code is a team programming competition, organized by Google, for students and professionals around the world. You pick your team and programming language and we pick an engineering problem for you to solve",
      date: "14.04.2020",
    },
  ];

  return (
    <div className="latest-news-container">
      <h2 className="header-of-latest-programs-container">LATEST PROGRAMS</h2>
      <div className="buttons-container">
        <button
          className={
            buttonClassID === 0
              ? "competions-and-others-buttons"
              : "competions-and-others-buttons-active"
          }
          onClick={() => onChangeCompetitionsButton()}
        >
          Competitions
        </button>
        <button
          className={
            buttonClassID === 1
              ? "competions-and-others-buttons"
              : "competions-and-others-buttons-active"
          }
          onClick={() => onChangeOthersButton()}
        >
          Others
        </button>
      </div>
      <div>
        {buttonClassID === 1 && (
          <div className="all-competitions-container">
            {competitionsList.map((array) => {
              return (
                <div key={array.id} className="competition-container">
                  <img
                    className="competition-logo"
                    src={array.competitionLogo}
                    alt="logo"
                  />
                  <div className="containt-picture-and-description-container">
                    <img
                      src={array.competitionImage}
                      className="containt-picture"
                      alt="competition"
                    />
                    <div className="description-and-date-container">
                      <div className="description-container">
                        {array.description}
                      </div>
                      <div className="date-container">{array.date}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {buttonClassID === 0 && <div>Allocated space for others tab</div>}
      </div>
    </div>
  );
}

// LatestNews.propTypes = {

// }

export default LatestNews;
