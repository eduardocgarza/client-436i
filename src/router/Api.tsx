import React, { useContext } from "react"
import { Redirect, useLocation } from "react-router-dom"
import { AcceptTokenServiceTypes } from "../network/models/token/AcceptTokenRequestModel"
import AcceptTokenRequestModel from "../network/models/token/AcceptTokenRequestModel"
import { VerifyTokenRequest, VerifySessionRequest } from "../network/NetworkRequests"
import { SessionContext } from "../state/context/SessionContext"
import educonnectionsAPI from "../network/educonnectionsAPI"

function useQuery () {
  return new URLSearchParams (useLocation ().search)
}

export default function Api () {
  const { api } = useContext (SessionContext)
  
  async function acceptTokenRequest (data: AcceptTokenRequestModel) {
    console.log ("--- @acceptTokenRequest begins ---")
    
    console.log ("Making request: ")
    
    try {
      const result = await api.request (VerifyTokenRequest (data))
      console.log ("--- @acceptTokenRequest end ---", result)
    }
    catch (error) {
      console.log(">>>>>Error: ", error)
    }
  }

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
      }
    }
  }
  return <Redirect to="/profile" />
}