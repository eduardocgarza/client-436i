import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavItem } from "./NavStyles"
import { 
  AboutRoute, 
  FAQsRoute, 
  PrivacyRoute, 
  TermsRoute, 
  ContactRoute 
} from "../../../router/constants/ClientRoutes"

export default function FooterNav () {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="ml-auto mr-auto">
          <NavItem to={AboutRoute}>
            About
          </NavItem>
          <NavItem to={FAQsRoute}>
            FAQs
          </NavItem>
          <NavItem to={PrivacyRoute}>
            Privacy
          </NavItem>
          <NavItem to={TermsRoute}>
            Terms
          </NavItem>
          <NavItem to={ContactRoute}>
            Contact
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}