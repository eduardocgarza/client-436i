import React, { FormEvent, useState, ChangeEvent } from "react"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"
import { Button, Form, Row } from "react-bootstrap"
import educonnectionsAPI from "../../../network/educonnectionsAPI"
import { LoginRequest } from "../../../network/NetworkRequests"
import { LoginRequestModel } from "../../../network/models/authentication/LoginRequestModel"
import useSessionContext from "../../../state/context/SessionContext"
import { Link, useHistory } from "react-router-dom"
import { ExploreRoute, SignupRoute } from "../../../router/constants/ClientRoutes"
import ValidationError from "../../_Shared/ValidationError/ValidationError"
import PageHeader from "../../_Shared/PageHeader/PageHeader"

export default function Login() {
  const history = useHistory()
  const { setSession } = useSessionContext()
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [formError, setFormError] = useState("")

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function validateForm() {
    let formIsValid = true
    if (!email) {
      setEmailError("Please enter an email")
      formIsValid = false
    } else {
      setEmailError("")
    }
    if (!password) {
      setPasswordError("Please enter a password")
      formIsValid = false
    } else {
      setPasswordError("")
    }
    setFormError("")
    return formIsValid
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formIsValid = validateForm()
    if (!formIsValid) {
      return
    }
    const loginRequest: LoginRequestModel = { email, password }
    const api = educonnectionsAPI.getApi()
    const request = LoginRequest(loginRequest)

    try {
      const response = await api.request(request)
      setSession({
        isAuthenticated: true,
        token: response.data.token,
      })
      api.addAccessToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      history.push(ExploreRoute)
    } 
    catch (error) {
      if(!error.errorClientMessage) {
        return setFormError("Sorry, there was a server error. Try again.")
      }
      return setFormError(error.errorClientMessage)
    }
  }

  return (
    <AppWrapper>
      <AppContainer>
        <PageHeader text="Login" />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleEmail}
              placeholder="Enter email address"
              size="sm"
              type="email"
              value={email}
            />
            {emailError ? <ValidationError text={emailError} /> : null}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              onChange={handlePassword}
              placeholder="Enter Password"
              size="sm"
              type="password"
              value={password}
            />
            {passwordError ? <ValidationError text={passwordError} /> : null}
            {formError ? <ValidationError text={formError} /> : null}
          </Form.Group>
          <Row className="d-flex justify-content-center">
            <p>Don't have an account? <Link to={SignupRoute}>Sign up</Link></p>
          </Row>
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
