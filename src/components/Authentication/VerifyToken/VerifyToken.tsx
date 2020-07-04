import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button } from "react-bootstrap"

export default function VerifyToken () {
  const [token, setToken] = useState ("")

  function handleToken (e: ChangeEvent<HTMLInputElement>) {
    setToken (e.target.value)
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault ()
    console.log("submitting form")
  }

  return (
    <>
      <Form className="main" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicToken">
          <Form.Label>Verification Code</Form.Label>
          <Form.Control 
            onChange={handleToken}
            placeholder="Enter code" 
            type="text" 
            value={token}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}