import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import profile from "./profile"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEgg, faBell, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faEgg, faBell, faPlus, faCaretDown);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

            <Route to path="/" component={profile}></Route>

        </Router>
      </Provider>
    )
  }
}

export default App;
