export default class ResetPasswordRequestModel {
  password: string
  passwordConfirmation: string

  constructor (password: string, passwordConfirmation: string) {
    this.password = password
    this.passwordConfirmation = passwordConfirmation
  }
}