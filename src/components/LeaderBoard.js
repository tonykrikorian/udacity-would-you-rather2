import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "./LeaderBoardCard";

class LeaderBoard extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        {this.props.usersIds.map((id) => (
          <LeaderBoardCard key={id} user={this.props.users[id]} />
        ))}
      </Fragment>
    );
  }
}
function mapStateToProps({ AuthedUser, Users }) {
  const UsersWithScore = { ...Users };
  for (let user in UsersWithScore) {
    UsersWithScore[user].score =
      Object.keys(UsersWithScore[user].questions).length +
      Object.keys(UsersWithScore[user].answers).length;
  }
  const usersIds = Object.keys(UsersWithScore).sort(
    (a, b) => UsersWithScore[b].score - UsersWithScore[a].score
  );
  return {
    AuthedUser,
    users: UsersWithScore,
    usersIds,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
