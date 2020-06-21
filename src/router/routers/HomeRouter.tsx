import React, { useContext } from "react"
import Dashboard from "../../components/Dashboard/Dashboard"
import Home from "../../components/Public/Home/Home"
// import { SessionContext } from "../../appState/context/SessionContext"

const HomeRouter: React.FC = () => {
  const isAuthenticated = false
  // const [session] = useContext (SessionContext)
  return isAuthenticated ? (<Dashboard />) : (<Home />)
}

export default HomeRouter