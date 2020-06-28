import React, { useContext } from "react"
import { Redirect, useLocation } from "react-router-dom"
import Axios from "axios"
import { SessionContext } from "../state/context/SessionContext"
import { useEduconnectionsApi } from "../network/educonnectionsAPI"

function useQuery () {
  return new URLSearchParams (useLocation ().search)
}

export default function Api () {
  const sessionContext = useContext (SessionContext)
  const query = useQuery ()
  console.log("Query: ", query)
  const accessToken = query.get ("accessToken")
  console.log (accessToken)
  const expiresIn = query.get ("expiresIn")
  console.log (expiresIn)
  const refreshToken = query.get ("refreshToken")
  console.log (refreshToken)

  const api = useEduconnectionsApi ()
  console.log ("Using api: ", api)
  
  Axios.post ("http://localhost:5000/auth/token", {
    service: "spotify",
    accessToken,
    expiresIn,
    refreshToken
  },
  {
    headers: {
      "Authorization": "XAXAS"
    }
  })
  
  return <Redirect to="/" />
  // return (
  //   <div></div>
  // )
}