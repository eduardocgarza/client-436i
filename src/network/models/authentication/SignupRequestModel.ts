export default class SignupRequestModel {
  name: string
  email: string
  password: string
  passwordConfirmation: string

  constructor (name: string, email: string, password: string, passwordConfirmation: string) {
    this.name = name
    this.email = email
    this.password = password
    this.passwordConfirmation = passwordConfirmation
  }
}