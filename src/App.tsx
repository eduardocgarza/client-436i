import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'
import SignUpForm from './components/SignUpForm.js';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/signup" exact component={SignUpForm}/> 
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
 

   
    </div>
    </Router>
  );
}

export default App;
