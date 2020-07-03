import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button } from "react-bootstrap"
import './Forgot.css'
export default function ForgotPassword () {
  const [email, setEmail] = useState ("")

  function handleEmail (e: ChangeEvent<HTMLInputElement>) {
    setEmail (e.target.value)
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault ()
    console.log("submitting form")
  }

  return (
    <>
      <Form className="main" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Forgot Password</Form.Label>
          <Form.Control 
            onChange={handleEmail}
            placeholder="Enter email" 
            type="email" 
            value={email}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send verification code
        </Button>
        
      </Form>
    </>
  )
}