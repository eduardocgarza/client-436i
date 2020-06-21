import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
// import handleSessionLogout from "../../appState/helpers/handleSessionLogout"
// import { SessionContext } from "../../appState/context/SessionContext"
import { NavContainer, NavLeft, NavItem, NavRight, NavButton } from "./NavStyles"
import { 
  HomeRoute, 
  ProfileRoute,
  ManageIntegrationsRoute,
} from "../../../router/constants/ClientRoutes"
import { ExploreRoute, MyClassesRoute, MyMatchesRoute } from "../../../router/constants/ClientRoutes"

export default function AuthNav () {
  const history = useHistory()
  // const sessionContext = useContext (SessionContext)
  
  function handleSignout () {
    // handleSessionLogout(sessionContext)
    history.push(HomeRoute)
  }

  return (
    <NavContainer>
      <NavLeft>
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
      </NavLeft>
      <NavRight>
        <NavItem to={ProfileRoute}>
          Profile
        </NavItem>
        <NavItem to={ManageIntegrationsRoute}>
          Settings
        </NavItem>
        <NavButton onClick={handleSignout}>
          Sign out
        </NavButton>
      </NavRight>
    </NavContainer>
  )
}