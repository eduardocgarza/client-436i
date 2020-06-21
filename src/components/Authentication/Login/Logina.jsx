import React, { useState } from "react"
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"
import FacebookLogin from "react-facebook-login"
import "../style/Login.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function facebookSuccess(res) {
    console.log("Facebook Response: ", res)
  }

  function componentClicked() {
    console.log("also clicked")
  }

  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  function handleSubmit(e) {
    e.preDefault()
  }

  return (
    <div>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" size="lg">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button block size="lg" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
      <div className="container">
        <div className="center">
          <FacebookLogin
            appId="596845454274053"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={facebookSuccess}
          />
        </div>
      </div>
    </div>
  )
}
