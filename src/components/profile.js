import React, { Component } from "react"
import Nav from "./navigation"
import Sidebar from "./sidebar"
import Main from "./main"

class profile extends Component {

  render() {
    return (
      <div>
      <Nav />
      <div className="container">
      <Sidebar/>
      <Main/>
      </div>
      </div>
    )
  }
}

// Api Link
// https://api.github.com/users/91cesarr



export default profile