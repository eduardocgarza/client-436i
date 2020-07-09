export default class VerifySessionRequestModel {
  token: string

  constructor (token: string) {
    this.token = token
  }
}