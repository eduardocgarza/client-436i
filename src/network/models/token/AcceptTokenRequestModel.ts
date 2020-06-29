export enum AcceptTokenServiceTypes {
  spotify = "spotify",
  facebook = "facebook",
  instagram = "instagram",
}

export default class AcceptTokenRequestModel {
  service: AcceptTokenServiceTypes
  accessToken: string
  expiresIn: string
  refreshToken: string
  
  constructor (service: AcceptTokenServiceTypes, accessToken: string, expiresIn: string, refreshToken: string) {
    this.service = service
    this.accessToken = accessToken
    this.expiresIn = expiresIn
    this.refreshToken = refreshToken
  }
}