import React, { ChangeEvent, FormEvent, useState } from "react"
import { Button, Form, Row } from "react-bootstrap"
import { AppContainer, AppWrapper } from "../../../assets/styles/AppContainer"
import PageHeader from "../../_Shared/PageHeader/PageHeader"
import ValidationError from "../../_Shared/ValidationError/ValidationError"

export default function Contact () {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState("")
  const [formError, setFormError] = useState("")

  function handleEmail (e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handleMessage (e: ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value)
  }

  function validateForm() {
    let formValid = true
    if (!email) {
      setEmailError("Please enter your email so we know where to contact you")
      formValid = false
    } else {
      setEmailError("")      
    }
    if (!message) {
      setMessageError("Please enter the message you want to send us here")
      formValid = false
    } else {
      setMessageError("")
    }
    return formValid
  }
  
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isValid = validateForm()
    if (!isValid) {
      return
    }
    setFormError("This feature is currently unavailable.")
  }
  
  return (
    <AppWrapper>
      <AppContainer>
        <PageHeader text="Contact Us" />
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
          <Form.Group controlId="message">
            <Form.Control 
              as="textarea" 
              rows={4} 
              onChange={handleMessage}
              placeholder="Send us a message..."
              size="sm"
              value={message}
            />
            {messageError ? <ValidationError text={messageError} /> : null}
          </Form.Group>
          {formError ? <ValidationError text={formError} /> : null}
          <Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Send message
            </Button>
          </Row>
        </Form>
      </AppContainer>
    </AppWrapper>
  )
}