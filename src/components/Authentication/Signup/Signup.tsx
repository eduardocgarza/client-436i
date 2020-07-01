import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button } from "react-bootstrap"
import './SignUp.css'
import { FacebookLoginButton } from "react-social-login-buttons";
export default function Signup () {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [passwordConfirmation, setPasswordConfirmation] = useState ("")

  function handleName (e: ChangeEvent<HTMLInputElement>) {
    setName (e.target.value)
  }
  
  function handleEmail (e: ChangeEvent<HTMLInputElement>) {
    setEmail (e.target.value)
  }

  function handlePassword (e: ChangeEvent<HTMLInputElement>) {
    setPassword (e.target.value)
  }

  function handlePasswordConfirmation (e: ChangeEvent<HTMLInputElement>) {
    setPasswordConfirmation (e.target.value)
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault ()
    console.log("submitting form")
  }

  return (
    <>
    <Form className="SignUp" onSubmit={handleSubmit}>
    <FacebookLoginButton  className="facebookButton">Sign up using Facebook</FacebookLoginButton>
    <hr ></hr>
      <Form.Group controlId="formBasicEmail">
        <Form.Control 
            onChange={handleName}
            placeholder="Enter name" 
            type="text" 
            value={name}
          />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control 
            onChange={handleEmail}
            placeholder="Enter email" 
            type="email" 
            value={email}
          />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">

          <Form.Control 
            onChange={handlePassword}
            placeholder="Enter Password" 
            type="password" 
            value={password}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirmation">

          <Form.Control 
            onChange={handlePasswordConfirmation}
            placeholder="Confirm password" 
            type="password" 
            value={passwordConfirmation}
          />
        </Form.Group>
      <Button className="signUpButton" variant="primary" type="submit">
        Sign up
      </Button>
      <a href="\login">Already have an account?</a>
    </Form>
    
  </>
  )
}