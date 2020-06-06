import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

import "../style/SignUp.css"

const SignUpForm = ({

}) => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
     
        <TextField
          name="username"
          floatingLabelText="user name"
     
        />
        <TextField
          name="email"
          floatingLabelText="email"
       
        />
        <TextField
          
          name="password"
          floatingLabelText="password"
        
        />

        <div className="pwStrRow">
     
            <div>
              
              <FlatButton 
                className="pwShowHideBtn" 
               
              />
            </div>
            
        </div>
        <TextField
      
          name="pwconfirm"
          floatingLabelText="confirm password"
      
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          type="submit"
          label="submit"
        />

      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
