import React from "react"
import { Redirect, useLocation } from "react-router-dom"
import { SpotifyAuthDataModel } from "../../network/models/apis/SpotifyAuthDataModel"
import { SendSpotifyDataRequest } from "../../network/NetworkRequests"
import useSessionContext from "../../state/context/SessionContext"
import { SettingsRoute } from "../constants/ClientRoutes"

function useQuery () {
  return new URLSearchParams (useLocation ().search)
}

export default function SpotifyAPI () {
  const { api, session } = useSessionContext()
  const query         = useQuery ()
  const accessToken   = query.get ("accessToken")
  const expiresIn     = query.get ("expiresIn")
  const refreshToken  = query.get ("refreshToken")
  
  async function sendSpotifyAuthData(data: SpotifyAuthDataModel) {
    try {
      const res = await api.apiRequest(SendSpotifyDataRequest(data)) 
      console.log("Response: ", res)
    }
    catch (error) {
      console.log("Caught error: ", error)
    }
  }

  console.log("Who am I? ", session)
  
  if (accessToken && expiresIn && refreshToken) {
    const data: SpotifyAuthDataModel = { accessToken, expiresIn, refreshToken }
    sendSpotifyAuthData(data)
  }
  return <Redirect to={SettingsRoute} />
}