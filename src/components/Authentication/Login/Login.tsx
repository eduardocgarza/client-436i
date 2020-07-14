import React, { FormEvent, useState, ChangeEvent } from "react"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"
import { Button, Form, Row } from "react-bootstrap"
import educonnectionsAPI from "../../../network/educonnectionsAPI"
import { LoginRequest } from "../../../network/NetworkRequests"
import LoginRequestModel from "../../../network/models/authentication/LoginRequestModel"
import useSessionContext from "../../../state/context/SessionContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setSession } = useSessionContext()
  const [error, setError] = useState("")

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const loginRequest = new LoginRequestModel(email, password)
      const api = educonnectionsAPI.getApi()

      const request = LoginRequest(loginRequest)
      const instance = await api.requestWithoutAuth(request)

      setSession({
        isAuthenticated: true,
        token: instance.data.token,
      })
      console.log("success")
      api.addAccessToken(instance.data.token)
      localStorage.setItem("token", instance.data.token)
    } catch (e) {
      setError("Email and password do not match our records")
    }
  }

  return (
    <AppWrapper>
      <AppContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <h6>{error}</h6>
            <Form.Control
              onChange={handleEmail}
              placeholder="Enter email address"
              size="sm"
              type="email"
              value={email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <h6>{error}</h6>
            <Form.Control
              onChange={handlePassword}
              placeholder="Enter Password"
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
