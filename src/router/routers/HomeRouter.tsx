import React from "react"
import Explore from "../../components/Explore/Explore"
import Home from "../../components/PublicModule/Home/Home"
import useSessionContext from "../../state/context/SessionContext"

export default function HomeRouter() {
  const { session } = useSessionContext()
  return session.isAuthenticated ? <Explore /> : <Home />
}