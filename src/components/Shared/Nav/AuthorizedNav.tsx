import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Logo, NavItem, NavButton } from "./NavStyles"
import handleSessionLogout from "../../../state/helpers/handleSessionLogout"
import { SessionContext } from "../../../state/context/SessionContext"
import { 
  HomeRoute, 
  ProfileRoute,
  ManageIntegrationsRoute,
} from "../../../router/constants/ClientRoutes"
import { ExploreRoute, MyClassesRoute, MyMatchesRoute } from "../../../router/constants/ClientRoutes"
import eduConnectionsLogo from "../../../assets/logo.png"

export default function AuthNav () {
  const history = useHistory()
  const sessionContext = useContext (SessionContext)

  function handleSignout () {
    handleSessionLogout(sessionContext)
    history.push(HomeRoute)
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="mr-auto">
          <NavItem to={HomeRoute}>
            <Logo src={eduConnectionsLogo} alt="logo" />
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
      </Container>
    </Navbar>
  )
}