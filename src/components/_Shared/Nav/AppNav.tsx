import React from "react"
import useSessionContext from "../../../state/context/SessionContext"
import AuthNav from "./AuthorizedNav"
import UnauthNav from "./UnauthorizedNav"

export default function AppNav () {
  const { session } = useSessionContext()
  return session.isAuthenticated ? <AuthNav /> : <UnauthNav />
}