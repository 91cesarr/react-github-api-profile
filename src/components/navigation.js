import React, { Component } from "react"
import { connect } from "react-redux"
import { getUserInfo } from "../actions/action"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class nav extends Component {
  componentDidMount() {
    getUserInfo()
  }

  render() {
    return (
      <div className="nav">
        <ul className="nav-left">
          <FontAwesomeIcon
            icon="egg"
          />
          <li><input placeholder="Search or jump to..."></input></li>
          <li>Pull Request</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>  
        </ul>
          <ul className="nav-right">
          <li>
            <FontAwesomeIcon
            icon="bell"/>
            </li>
          <li>
            <FontAwesomeIcon
            icon="plus"/>
            <span>
              <FontAwesomeIcon
              icon="caret-down"/>
            </span>
            </li>
          <li>
            <img alt={this.props.name} src={this.props.thumbnail} />
            <span>
              <FontAwesomeIcon
            icon="caret-down"/>
            </span>
            </li>
          <li></li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    thumbnail: appState.user.avatar_url,
    // user: appState.user,
    // thumbnail: appState.user.avatar_url,
    // name: appState.user.name,
    // username: appState.user.login
  }
}
export default connect(mapStateToProps)(nav)

// <i class="fas fa-bell"></i>
// <i class="fas fa-plus"></i>
// <i class="fas fa-caret-down"></i>