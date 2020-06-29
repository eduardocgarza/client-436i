import React from "react"
import { Redirect, useLocation } from "react-router-dom"
import educonnectionsAPI from "../network/educonnectionsAPI"
import { AcceptTokenServiceTypes } from "../network/models/token/AcceptTokenRequestModel"
import AcceptTokenRequestModel from "../network/models/token/AcceptTokenRequestModel"
import { VerifyTokenRequest } from "../network/NetworkRequests"

const api = educonnectionsAPI.getApi ()

function useQuery () {
  return new URLSearchParams (useLocation ().search)
}

async function acceptTokenRequest (data: AcceptTokenRequestModel) {
  console.log("making request to verify token", api)
  api.request (VerifyTokenRequest (data))
}

export default function Api () {
  const query = useQuery ()
  const accessToken = query.get ("accessToken")
  const expiresIn = query.get ("expiresIn")
  const refreshToken = query.get ("refreshToken")
  const service = query.get ("service")

  if (accessToken && expiresIn && refreshToken && service) {
    switch (service) {
      case AcceptTokenServiceTypes.facebook:
      case AcceptTokenServiceTypes.instagram:
      case AcceptTokenServiceTypes.spotify: {
        const data = new AcceptTokenRequestModel (service, accessToken, expiresIn, refreshToken)
        acceptTokenRequest (data)
        break
      }
    }
  }
  return <Redirect to="/" />
}