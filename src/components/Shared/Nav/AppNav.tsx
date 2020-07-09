import React, { useContext } from "react"
import { SessionContext } from "../../../state/context/SessionContext"
import AuthNav from "./AuthorizedNav"
import UnauthNav from "./UnauthorizedNav"

export default function AppNav () {
  const { session } = useContext(SessionContext)
  return session.isAuthenticated ? <AuthNav /> : <UnauthNav />
}