import Request from "./types/Request"
import { HttpMethodTypes as Http } from "./types/HttpMethodTypes"
import ForgotPasswordRequestModel from "./models/authentication/ForgotPasswordRequestModel"
import { LoginRequestModel } from "./models/authentication/LoginRequestModel"
import { SignupRequestModel } from "./models/authentication/SignupRequestModel"
import VerifySessionRequestModel from "./models/authentication/VerifySessionRequestModel"
import ResetPasswordRequestModel from "./models/authentication/ResetPasswordRequestModel"
import VerifyResetPasswordTokenRequestModel from "./models/authentication/VerifyResetPasswordTokenRequestModel"
import { SpotifyAuthDataModel } from "./models/apis/SpotifyAuthDataModel"

const AuthRequests = "/auth"
const AccountRequests = "/account"
const ProfileRequests = "/account/:accountId"
const MatchesRequests = "/matches"
const SessionRequests = "/session"
const SpotifyRequests = "/spotify"
const courseRequests = "/courses"

/**
 * @Account
 */
export function GetAccountRequest() {
  return new Request(Http.GET, AccountRequests)
}
export function GetProfileRequest(accountId: string) {
  return new Request(Http.GET, `${AccountRequests}/${accountId}`)
}

export function DeleteAccountRequest() {
  return new Request(Http.DELETE, AccountRequests)
}

export function GetMatchesRequest() {
  return new Request(Http.GET, MatchesRequests)
}

/**
 * @Auth Requests
 */

export function ForgotPasswordRequest(data: ForgotPasswordRequestModel) {
  return new Request(Http.POST, `${AuthRequests}/forgot`, data)
}

export function LoginRequest(data: LoginRequestModel) {
  return new Request(Http.POST, `${AuthRequests}/login`, data)
}

export function VerifyResetPasswordTokenRequest(
  data: VerifyResetPasswordTokenRequestModel,
  accountId: number,
  token: string
) {
  return new Request(
    Http.GET,
    `${AuthRequests}/reset/${accountId}/${token}`,
    data
  )
}

export function ResetPasswordRequest(data: ResetPasswordRequestModel) {
  return new Request(Http.POST, `${AuthRequests}/reset`, data)
}

export function SignupRequest(data: SignupRequestModel) {
  return new Request(Http.POST, `${AuthRequests}/signup`, data)
}

/**
 * @Session Requests
 */

export function VerifySessionRequest(data: VerifySessionRequestModel) {
  return new Request(Http.POST, `${SessionRequests}/verify`, data)
}

/**
 * @APIs Requests
 */
export function SendSpotifyDataRequest(data: SpotifyAuthDataModel) {
  return new Request(Http.POST, SpotifyRequests, data)
}

/**
 * @Facebook Requests
 */
export function FacebookRequest(data: any) {
  return new Request(Http.POST, "/facebook/connect", data)
}

/**
 * @Course Requests
 */
export function GetCourseRequest() {
  return new Request(Http.GET, courseRequests)
}
