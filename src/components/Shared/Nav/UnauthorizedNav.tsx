import React from "react"
import { NavContainer, NavRight, NavItem } from "./NavStyles"
import { LoginRoute, SignupRoute } from "../../../router/constants/ClientRoutes"

export default function UnauthorizedNav () { 
  return (
    <NavContainer>
      <NavRight>
        <NavItem to={LoginRoute}>
          Login
        </NavItem>
        <NavItem to={SignupRoute}>
          Signup
        </NavItem>
      </NavRight>
    </NavContainer>
  )
}