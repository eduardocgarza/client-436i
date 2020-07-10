import React, { FormEvent, useState, ChangeEvent } from "react"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"
import { Button, Form, Row } from "react-bootstrap"

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
    <AppWrapper>
      <AppContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              onChange={handleEmail}
              placeholder="Enter email" 
              size="sm"
              type="email" 
              value={email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              onChange={handlePassword}
              placeholder="Password" 
              size="sm"
              type="password" 
              value={password}
            />
          </Form.Group>
          <Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Row>
        </Form>
      </AppContainer>
    </AppWrapper>
  )
}