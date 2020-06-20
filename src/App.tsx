import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'

//import {createStore} from 'redux';
import SignUpContainer from './components/SignUpContainer.js'
import {Redirect} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
        <Route path="/signup" exact component={SignUpContainer}/> 
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
    </div>
    <Redirect exact from="/" to="/signup" />;
    </Router>
  
  );
}

export default App;
