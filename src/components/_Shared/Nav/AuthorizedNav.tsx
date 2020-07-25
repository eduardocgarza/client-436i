import React from "react"
import { useHistory } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Logo, NavItem, NavButton } from "./NavStyles"
import handleSessionLogout from "../../../state/helpers/handleSessionLogout"
import eduConnectionsLogo from "../../../assets/icons/logo.png"
import useSessionContext from "../../../state/context/SessionContext"
import { 
  ExploreRoute, 
  MyCoursesRoute, 
  MyMatchesRoute, 
  HomeRoute, 
  ProfileRoute,
  SettingsRoute,
} from "../../../router/constants/ClientRoutes"

export default function AuthNav () {
  const history = useHistory()
  const sessionContext = useSessionContext()

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
          <NavItem to={MyCoursesRoute}>
            Courses
          </NavItem>
          <NavItem to={MyMatchesRoute}>
            Matches
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          <NavItem to={ProfileRoute}>
            Profile
          </NavItem>
          <NavItem to={SettingsRoute}>
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