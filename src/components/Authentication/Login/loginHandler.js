import React, { useState } from "react"
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import "../style/Login.css"
import { connect } from "react-redux"
import { authenticate, update, updateProfile } from "../../../state/actions/actions"
const axios = require("axios")

function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ password })
    let body = {
      email: email,
      password: password,
    }
    axios
      .post("https://api.educonnections.ca/auth/login", body)
      .then((res) => {
        if (res.status === 200) {
          props.authenticate()
          props.history.push("/profile")
          props.updateProfile(res.data)
          let params = {
            Authorization: "Bearer " + res.data.token,
          }
          console.log(res.data.profile)
          axios
            .get(res.data.profile, {
              headers: {
                Authorization: "Bearer " + res.data.token,
              },
            })
            .then((res) => {
              console.log(res)
              if (res.status === 200) {
                props.update(res.data.name)
              } else {
                this.setState({
                  errors: { message: res.data.message },
                })
              }
            })
            .catch((err) => {
              console.log("Sign up data submit error: ", err)
            })
        } else {
          this.setState({
            errors: { message: res.data.message },
          })
        }
      })
      .catch((err) => {
        console.log("Sign up data submit error: ", err)
      })
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
    userName: state.userName,
    profile: state.profile,
  }
}

export default connect(mapStateToProps, {
  authenticate,
  update,
  updateProfile,
})(Login)