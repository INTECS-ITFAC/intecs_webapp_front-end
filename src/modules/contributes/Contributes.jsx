import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { contributesActions } from "./ducks";
import "./Contributes.scss";
import ContributeCard from "../../components/contributeCard/ContributeCard";

export class Contributes extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.contributesActions.getContributes();
  }

  render() {
    return (
      <div className="contributes-container">
        <div>contributes</div>
        <div className="row">
          {this.props.Contributes.data.map((user, i) => {
            return <ContributeCard data={user} />;
          })}
        </div>

        <div class="btn btn-info">
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
