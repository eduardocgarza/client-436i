import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button } from "react-bootstrap"

export default function ResetPassword () {
  const [password, setPassword] = useState ("")
  const [passwordConfirmation, setPasswordConfirmation] = useState ("")

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
        Reset password
      </Button>
    </Form>
  </>
  )
}