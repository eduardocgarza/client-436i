import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
import SignUpForm from "./components/SignUpForm"

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/signup" component={SignUpForm} exact /> 
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}