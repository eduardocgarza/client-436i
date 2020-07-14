import Request from "./types/Request"
import { HttpMethodTypes as Http } from "./types/HttpMethodTypes"
import UpdateAccountRequestModel from "./models/accounts/UpdateAccountRequestModel"
import ForgotPasswordRequestModel from "./models/authentication/ForgotPasswordRequestModel"
import { LoginRequestModel } from "./models/authentication/LoginRequestModel"
import { SignupRequestModel } from "./models/authentication/SignupRequestModel"
import VerifySessionRequestModel from "./models/authentication/VerifySessionRequestModel"
import ResetPasswordRequestModel from "./models/authentication/ResetPasswordRequestModel"
import VerifyResetPasswordTokenRequestModel from "./models/authentication/VerifyResetPasswordTokenRequestModel"
import { SpotifyAuthDataModel } from "./models/apis/SpotifyAuthDataModel"

const AuthRequests = "/auth"
const AccountRequests = "/account"
const SessionRequests = "/session"
const SpotifyRequests = "/spotify"

/**
 * @Account
 */
export function GetAccountRequest () {
  return new Request (Http.GET, AccountRequests)
}

export function UpdateAccountRequest (data: UpdateAccountRequestModel) {
  return new Request (Http.PATCH, AccountRequests, data)
}

export function DeleteAccountRequest () {
  return new Request (Http.DELETE, AccountRequests)
}

/**
 * @Auth Requests
 */

export function ForgotPasswordRequest (data: ForgotPasswordRequestModel) {
  return new Request (Http.POST, `${AuthRequests}/forgot`, data)
}

export function LoginRequest (data: LoginRequestModel) {
  return new Request (Http.POST, `${AuthRequests}/login`, data)
}

export function VerifyResetPasswordTokenRequest (data: VerifyResetPasswordTokenRequestModel, accountId: number, token: string) {
  return new Request (Http.GET, `${AuthRequests}/reset/${accountId}/${token}`, data)
}

export function ResetPasswordRequest (data: ResetPasswordRequestModel) {
  return new Request (Http.POST, `${AuthRequests}/reset`, data)
}

export function SignupRequest (data: SignupRequestModel) {
  return new Request (Http.POST, `${AuthRequests}/signup`, data)
}

/**
 * @Session Requests
 */

export function VerifySessionRequest (data: VerifySessionRequestModel) {
  return new Request(Http.POST, `${SessionRequests}/verify`, data)
}

/**
 * @APIs Requests
 */
export function SendSpotifyDataRequest (data: SpotifyAuthDataModel) {
  return new Request (Http.POST, SpotifyRequests, data)
}