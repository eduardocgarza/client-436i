import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button, Row } from "react-bootstrap"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"
import { SignupRequestModel } from "../../../network/models/authentication/SignupRequestModel"
import useSessionContext from "../../../state/context/SessionContext"
import educonnectionsAPI from "../../../network/educonnectionsAPI"
import { SignupRequest } from "../../../network/NetworkRequests"
import ValidationError from "../../_Shared/ValidationError/ValidationError"
import { Link, useHistory } from "react-router-dom"
import { ExploreRoute, LoginRoute } from "../../../router/constants/ClientRoutes"
import PageHeader from "../../_Shared/PageHeader/PageHeader"

export default function Signup() {
  const history = useHistory()
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const [formError, setFormError] = useState("")
  const { setSession } = useSessionContext()

  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handlePasswordConfirmation(e: ChangeEvent<HTMLInputElement>) {
    setPasswordConfirmation(e.target.value)
  }

  function validateForm () {
    let formIsValid = true
    if (!name) {
      setNameError("Please enter a name")
      formIsValid = false
    } else {
      setNameError("")
    }
    
    if (!email) {
      setEmailError("Please enter an email")
      formIsValid = false
    } else {
      setEmailError("")
    }
    
    if (!password ) {
      setPasswordError("Please enter a password")
      formIsValid = false
    } 
    else if (password.length < 8) {
      setPasswordError("Please enter a password with at least 8 characters")
      formIsValid = false
    } else {
      setPasswordError("")
    }

    if (!passwordConfirmation) {
      setConfirmError("Please enter a password")
      formIsValid = false
    } else if (passwordConfirmation.length < 8) {
      setConfirmError("Please enter a password with at least 8 characters")
      formIsValid = false
    } else {
      setConfirmError("")
    }

    if (password && passwordConfirmation && password !== passwordConfirmation) {
      setConfirmError("Please make sure the passwords entered match")
      formIsValid = false
    } else if (password && passwordConfirmation && password === passwordConfirmation) {
      setConfirmError("")
    }
    return formIsValid
  }
  
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isValid = validateForm()
    if (!isValid) {
      return
    }
    const signupRequest: SignupRequestModel = { name, email, password, passwordConfirmation }
    const api = educonnectionsAPI.getApi()
    const request = SignupRequest(signupRequest)
    
    try {
      const response = await api.request(request)
      console.log("Server response: ", response)
      setSession({
        isAuthenticated: true,
        token: response.data.token,
      })
      localStorage.setItem("token", response.data.token)
      history.push(ExploreRoute)
    }
    catch (error) {
      console.log(error)
      if(!error.errorClientMessage) {
        return setFormError("Sorry, there was a server error. Try again.")
      }
      return setFormError(error.errorClientMessage)
    }
  }

  return (
    <AppWrapper>
      <AppContainer>
        <PageHeader text="Signup" />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleName}
              placeholder="Enter name"
              size="sm"
              type="text"
              value={name}
            />
            {nameError ? <ValidationError text={nameError} /> : null}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleEmail}
              placeholder="Enter email"
              size="sm"
              type="email"
              value={email}
            />
            {emailError ? <ValidationError text={emailError} /> : null}
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
            {passwordError ? <ValidationError text={passwordError} /> : null}
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              onChange={handlePasswordConfirmation}
              placeholder="Confirm password"
              size="sm"
              type="password"
              value={passwordConfirmation}
            />
            {confirmError ? <ValidationError text={confirmError} /> : null}
            {formError ? <ValidationError text={formError} /> : null}
          </Form.Group>
          <Row className="d-flex justify-content-center">
            <p>Already have an account? <Link to={LoginRoute}>Log in</Link></p>
          </Row>
          <Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Row>
        </Form>
      </AppContainer>
    </AppWrapper>
  )
}
