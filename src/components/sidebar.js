import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserInfo } from "../actions/action";

class sidebar extends Component {
  componentDidMount() {
    getUserInfo();
  }

  render() {
    return (
      <div className="sidebar">
        <ul>
          <img alt={this.props.name} src={this.props.thumbnail} />
          <div className="status"><img alt={this.props.name} className="status_icon" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"/><p>Focusing</p></div>
          <li><h2>{this.props.name}</h2></li>
          <li>{this.props.username}</li>
          <button>Edit</button>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    user: appState.user,
    thumbnail: appState.user.avatar_url,
    name: appState.user.name,
    username: appState.user.login
  };
}
export default connect(mapStateToProps)(sidebar);