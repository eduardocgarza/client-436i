import React from "react"
import Dashboard from "../../components/Dashboard/Dashboard"
import Home from "../../components/Public/Home/Home"
import useSessionContext from "../../state/context/SessionContext"

export default function HomeRouter() {
  const { session } = useSessionContext()
  return session.isAuthenticated ? <Dashboard /> : <Home />
}