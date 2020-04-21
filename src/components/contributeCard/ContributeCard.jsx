import React from "react";

export default function ContributeCard({ data }) {
  console.log("ContributeCard -> data", data);
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card">
        <img className="card-img-top" src={data.avatar_url} />
        <div className="card-block">
          <h4 className="card-title">{data.login}</h4>
          <div class="btn btn-success">
            <a href={data.html_url} target="_blank">
              Profile
            </a>
          </div>
        </div>
        <div className="card-footer">
          <span>
            <i className />
            {data.contributions} contributions
          </span>
        </div>
      </div>
    </div>
  );
}
