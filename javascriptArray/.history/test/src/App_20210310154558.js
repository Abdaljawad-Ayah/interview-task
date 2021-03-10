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
        <Switch>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              React
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <a class="nav-link" href="#">
                <Route path="/add" component={AddUser} />
              </a>
              <a class="nav-link" href="#">
                <Route path="/edit/id" component={EditUser} />
              </a>
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">
                  <Route path="/" component={Home} />
                </a>
              </div>
            </div>
          </nav>
        </Switch>
      </Router>
    </div>
  )
}

export default App
