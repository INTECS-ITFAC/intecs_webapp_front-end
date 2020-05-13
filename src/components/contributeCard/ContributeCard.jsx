import React from "react";
import "./ContributeCard.scss";

export default function ContributeCard({ data, isContributes }) {
  return (
    <div className="contribute-card-div col-xl-2 col-lg-3 col-md-4 col-sm-5">
      <div className="card contribute-card">
        <div className="card-body">
          <div className="profile">
            <img src={data.avatar_url} className="thumbnail" alt={data.login} />
            <h3 className="name">{data.login}</h3>
            {isContributes ? (
              <div>
                <h4>{data.contributions}</h4>
                <p>Contributions</p>
              </div>
            ) : null}
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-button"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
