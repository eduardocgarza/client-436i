import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button } from "react-bootstrap"

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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            onChange={handleName}
            placeholder="Enter name" 
            type="text" 
            value={name}
          />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            onChange={handleEmail}
            placeholder="Enter email" 
            type="email" 
            value={email}
          />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            onChange={handlePassword}
            placeholder="Password" 
            type="password" 
            value={password}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control 
            onChange={handlePasswordConfirmation}
            placeholder="Confirm password" 
            type="password" 
            value={passwordConfirmation}
          />
        </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
    <a href="\login">Already have an account?</a>
  </>
  )
}