import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { NavItem, NavButton } from "./NavStyles"
import handleSessionLogout from "../../../state/handleSessionLogout"
import { SessionContext } from "../../../state/context/SessionContext"
import { 
  HomeRoute, 
  ProfileRoute,
  ManageIntegrationsRoute,
} from "../../../router/constants/ClientRoutes"
import { ExploreRoute, MyClassesRoute, MyMatchesRoute } from "../../../router/constants/ClientRoutes"
import { Navbar, Nav } from "react-bootstrap"

export default function AuthNav () {
  const history = useHistory()
  const sessionContext = useContext (SessionContext)

  function handleSignout () {
    handleSessionLogout(sessionContext)
    history.push(HomeRoute)
  }

  return (
    <Navbar>
      <Nav className="mr-auto">
        <NavItem to={HomeRoute}>
          Dashboard
        </NavItem>
        <NavItem to={ExploreRoute}>
          Explore
        </NavItem>
        <NavItem to={MyClassesRoute}>
          Classes
        </NavItem>
        <NavItem to={MyMatchesRoute}>
          Matches
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <NavItem to={ProfileRoute}>
          Profile
        </NavItem>
        <NavItem to={ManageIntegrationsRoute}>
          Settings
        </NavItem>
        <NavButton onClick={handleSignout}>
          Sign out
        </NavButton>
      </Nav>
    </Navbar>
  )
}