import React, { useContext } from "react"
// import { SessionContext } from "../../appState/context/SessionContext"
import AuthNav from "./AuthorizedNav"
import UnauthNav from "./UnauthorizedNav"

export default function AppNav () {
  // const [session] = useContext(SessionContext)
  const isAuthenticated = false

  return isAuthenticated ? <AuthNav /> : <UnauthNav />
}