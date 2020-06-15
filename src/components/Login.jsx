import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../style/Login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preDefault();
  }

  // FB.getLoginStatus(function(response) {
  //     if (response.status === 'connected') {
  //       console.log(response.authResponse.accessToken);
  //     }
  //   });

  return (
    <div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=267140941383873&autoLogAppEvents=1" nonce="EOyVesdw"></script>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
      <div class="container">
        <div class="center">
          <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" data-width=""></div>
        </div>
      </div>
    </div>
  );
}