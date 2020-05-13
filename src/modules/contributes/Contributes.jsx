import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { contributesActions } from "./ducks";
import "./Contributes.scss";
import ContributeCard from "../../components/contributeCard/ContributeCard";
import { Moderators, QATeam, DesignTeam } from "../../assets/data/users";

export class Contributes extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.contributesActions.getContributes();
    this.props.contributesActions.getContributesBackend();
  }

  render() {
    return (
      <div className="contributes-container">
        <React.Fragment>
          <div>Moderators</div>
          <div className="row contributes-card-row">
            {Moderators.map((user, i) => {
              return (
                <ContributeCard key={i} data={user} isContributes={false} />
              );
            })}
          </div>
        </React.Fragment>
        <React.Fragment>
          <div>Frontend Contributes</div>
          <div className="row contributes-card-row">
            {this.props.Contributes.data.map((user, i) => {
              return (
                <ContributeCard key={i} data={user} isContributes={true} />
              );
            })}
          </div>
        </React.Fragment>
        <React.Fragment>
          <div>Backend Contributes</div>
          <div className="row contributes-card-row">
            {this.props.BackendContributes.data.map((user, i) => {
              return (
                <ContributeCard key={i} data={user} isContributes={true} />
              );
            })}
          </div>
        </React.Fragment>
        <React.Fragment>
          <div>QA Team</div>
          <div className="row contributes-card-row">
            {QATeam.map((user, i) => {
              return (
                <ContributeCard key={i} data={user} isContributes={false} />
              );
            })}
          </div>
        </React.Fragment>
        <React.Fragment>
          <div>Design Team</div>
          <div className="row contributes-card-row">
            {DesignTeam.map((user, i) => {
              return (
                <ContributeCard key={i} data={user} isContributes={false} />
              );
            })}
          </div>
        </React.Fragment>

        <div className="btn btn-info">
          <a
            href={"https://gitter.im/INTECS-ITFAC/community"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Community
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Contributes: state.Contributes.contributes,
    BackendContributes: state.Contributes.backendContributes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    contributesActions: bindActionCreators(contributesActions, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Contributes)
);
