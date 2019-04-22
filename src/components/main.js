import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getRepo } from "../actions/action";
import Moment from "react-moment";

class Main extends Component {
  componentDidMount() {
    getRepo()
  }

  render() {
    return (
      <div className="main">
        <ul className="overview">
          <li>Overview</li>
          <li className="active">Repositories</li>
          <li>Projects</li>
          <li>Stars</li>
          <li>Followers</li>
          <li>Following</li>
        </ul>
        <ul className="find-overview">
          <li><input placeholder="Find a repository..."></input></li>
          <li>Pull Request</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ul>
        <ul className="repo">
          {this.props.repos.map(item => (
            <li key={item.id}>
              <h3>
                <Link to={item.html_url}>{item.name}</Link></h3> <div className={item.language}></div><span>{item.language}</span> Updated <Moment format="MMMDD">{item.updated_at}</Moment>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    repos: appState.repos,
    name: appState.repos.name,
    language: appState.repos.language,
    updated_at: appState.repos.updated_at
  };
}
export default connect(mapStateToProps)(Main);


// {
//   this.props.repo.map(item => (
//     <li className="repo-name">{item.name}</li>
//   ));
// }


//     Favorite Food: <FontAwesomeIcon icon="stroopwafel" />