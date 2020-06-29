import React, { useContext } from "react"
import Dashboard from "../../components/Dashboard/Dashboard"
import Home from "../../components/Public/Home/Home"
import { SessionContext } from "../../state/context/SessionContext"

const HomeRouter: React.FC = () => {
  const { session } = useContext (SessionContext)
  return session.isAuthenticated ? <Dashboard /> : <Home />
}

export default HomeRouter