import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button } from "react-bootstrap"
import './Login.css'
import { FacebookLoginButton } from "react-social-login-buttons";
export default function Login () {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  function handleEmail (e: ChangeEvent<HTMLInputElement>) {
    setEmail (e.target.value)
  }

  function handlePassword (e: ChangeEvent<HTMLInputElement>) {
    setPassword (e.target.value)
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("submitting form")
    
    //LoginRequest();

  }

  return (
    <>
      <Form className="Login"  onSubmit={handleSubmit}>

        <Form.Group className="emailBox" controlId="formBasicEmail">
        <FacebookLoginButton  className="facebookButton"></FacebookLoginButton>
        <hr></hr>
          <Form.Control 
            onChange={handleEmail}
            placeholder="Enter email" 
            type="email" 
            value={email}
          />
        </Form.Group>
        <Form.Group className="passwordBox" controlId="formBasicPassword">
          
          <Form.Control 
            onChange={handlePassword}
            placeholder="Enter Password" 
            type="password" 
            value={password}
          />
        </Form.Group>
        <Button className="loginButton" variant="primary" type="submit">
          Log in
        </Button>
        <a href="\forgot">Forgot Password?</a>
      </Form>
    
    </>
  )
}