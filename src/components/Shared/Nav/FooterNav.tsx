import React from "react"
import { FooterNavContainer, NavItem, NavCenter } from "./NavStyles"
import { AboutRoute, FAQsRoute, PrivacyRoute, TermsRoute, ContactRoute } from "../../../router/constants/ClientRoutes"

export default function FooterNav () {
  return (
    <FooterNavContainer>
      <NavCenter>
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
      </NavCenter>
    </FooterNavContainer>
  )
}