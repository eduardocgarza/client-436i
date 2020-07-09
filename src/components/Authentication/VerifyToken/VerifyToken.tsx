import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button, Row } from "react-bootstrap"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"

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
    <AppWrapper>
      <AppContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicToken">
            <Form.Label>Verification Code</Form.Label>
            <Form.Control 
              onChange={handleToken}
              placeholder="Enter code" 
              type="text" 
              value={token}
            />
          </Form.Group>
          <Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </AppContainer>
    </AppWrapper>
  )
}