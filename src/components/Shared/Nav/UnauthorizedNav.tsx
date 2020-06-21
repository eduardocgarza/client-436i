import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { HomeRoute, LoginRoute, SignupRoute } from "../../../router/constants/ClientRoutes"
import { NavItem } from "./NavStyles"

export default function UnauthorizedNav () { 
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="mr-auto">
          <NavItem to={HomeRoute}>
            Navbar
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          <NavItem to={LoginRoute}>
            Login
          </NavItem>
          <NavItem to={SignupRoute}>
            Signup
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}