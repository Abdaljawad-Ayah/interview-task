import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './compnents/Home'
import { AddUser } from './compnents/AddUser'
import { EditUser } from './compnents/EditUser'
function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light table-dark">
          <a class="navbar-brand" href="">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="http://google.com">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://google.com">
                  Add
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://google.com">
                  Edit
                </a>
              </li>
            </ul>
          </div>
        </nav>{' '}
        */
        <Switch>
          <Home />
          <AddUser />
          <EditUser />
        </Switch>
      </Router>
    </div>
  )
}

export default App
