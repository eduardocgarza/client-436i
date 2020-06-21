import React, { Component } from "react"
import SignUpForm from "./SignupContainer.js"
import { MuiThemeProvider } from "material-ui/styles"
import { authenticate, update, updateProfile } from "../../../state/actions/actions"
import { connect } from "react-redux"
import axios from "axios"

const FormValidators = require("../../validate")
const validateSignUpForm = FormValidators.validateSignUpForm
const zxcvbn = require("zxcvbn")

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
      user: {
        username: "",
        email: "",
        password: "",
        pwconfirm: "",
      },
      btnTxt: "show",
      type: "password",
      score: "0",
    }

    this.pwMask = this.pwMask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitSignup = this.submitSignup.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.pwHandleChange = this.pwHandleChange.bind(this)
  }
  handleChange(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user,
    })
  }

  pwHandleChange(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user,
    })

    if (event.target.value === "") {
      this.setState((state) =>
        Object.assign({}, state, {
          score: "null",
        })
      )
    } else {
      var pw = zxcvbn(event.target.value)
      this.setState((state) =>
        Object.assign({}, state, {
          score: pw.score + 1,
        })
      )
    }
  }

  submitSignup(user) {
    let body = {
      name: user.usr,
      email: user.email,
      password: user.pw,
      passwordConfirmation: user.pw,
    }

    axios
      .post("https://api.educonnections.ca/auth/signup", body)
      .then((res) => {
        console.log(res.status)
        if (res.status === 201) {
          localStorage.token = res.data.token
          localStorage.isAuthenticated = true
          this.props.authenticate()
          this.props.update(user.usr)
          this.props.updateProfile(res.data)
          this.props.history.push("/profile")
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

  validateForm(event) {
    event.preventDefault()
    var payload = validateSignUpForm(this.state.user)
    if (payload.success) {
      this.setState({
        errors: {},
      })
      var user = {
        usr: this.state.user.username,
        pw: this.state.user.password,
        email: this.state.user.email,
      }
      this.submitSignup(user)
    } else {
      const errors = payload.errors
      this.setState({
        errors,
      })
    }
  }

  pwMask(event) {
    event.preventDefault()
    this.setState((state) =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        btnTxt: this.state.btnTxt === "show" ? "hide" : "show",
      })
    )
  }

  render() {
    const isLogged = this.props.isLogged
    return !isLogged ? (
      <div>
        <MuiThemeProvider>
          <SignUpForm
            onSubmit={this.validateForm}
            onChange={this.handleChange}
            onPwChange={this.pwHandleChange}
            errors={this.state.errors}
            user={this.state.user}
            score={this.state.score}
            btnTxt={this.state.btnTxt}
            type={this.state.type}
            pwMask={this.pwMask}
          />
        </MuiThemeProvider>
      </div>
    ) : (
      ""
    )
  }
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
})(Signup)
